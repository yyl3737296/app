'use strict';
const os = require('os');
const path = require('path');
const assert = require('assert');
const fs = require('fs');
const fse = require('fs-extra');
const archiver = require('archiver');
const chalk = require('chalk');
const shell = require('shelljs');
const co = require('co');
const formatDate = require('date-fns/format');
const install = require('nodeinstall').install;
const EXT = { zip: 'zip', tar: 'tar' };
class Archive {
  constructor(config = {}) {
    this.config = {
      cwd: process.cwd(),
      format: 'zip', // support zip or tar
      filename: formatDate(new Date(), 'YYYYDDhhmmss'),
      source: ['src', 'app', 'config', 'public', 'lib', 'app.js', 'index.js', 'agent.js', 'package.json'],
      target: path.join(os.tmpdir(), 'archive-tool'),
      installNode: false,
      installDeps: false,
      archive: {},
      ...config
    };
  }

  copyFile(source, target, baseDir) {
    console.log(chalk.green('------ start copy file ------'));
    baseDir = baseDir || this.config.cwd;
    const files = Array.isArray(source) ? source : [source];
    if (!fse.existsSync(target)) {
      fse.ensureDirSync(target);
    }
    files.forEach(file => {
      const filepath = path.isAbsolute(file) ? file : path.join(baseDir, file);
      if (fse.existsSync(filepath)) {
        const dist = path.join(target, file);
        if (fse.statSync(filepath).isDirectory()) {
          fse.copySync(filepath, dist);
        } else {
          fse.copySync(filepath, dist);
        }
      }
    });
    console.log(chalk.green('------ copy file successfully ------ '));
  }

  installNode(target, options) {
    console.log(chalk.green('------ start install node into node_modules ------ '));
    const self = this;
    const cwd = target || this.config.target;
    const installNode = { ...this.config.installNode, ...options };
    return co(function *() {
      return yield install({
        cwd,
        version: '^8.10.0',
        cache: true,
        china: true,
        ...installNode
      });
    });
  }

  installDeps(target, options) {
    const { cwd, mode, registry } = {
      cwd: target || this.config.target,
      mode: 'npm',
      registry: 'https://registry.npm.taobao.org',
      ...this.config.installDeps,
      ...options
    };
    console.log(chalk.green(`------ start ${mode} install --production dependencies ------ `));
    const cmdArgs = [`${mode} install --production`];
    if (registry && (mode === 'npm' || mode === 'cnpm')) {
      cmdArgs.push(`--registry ${registry}`);
    }
    const result = shell.exec(cmdArgs.join(' '), {
      cwd,
      shell: '/bin/bash'
    });
    if (result.code !== 0) {
      throw new Error('Install production dependencies error', result);
    }
    console.log(chalk.green(`------ ${mode} install --production dependencies successfully ------ `));
  }

  archive(source, target, options = {}, callback) {
    const ext = path.extname(target).replace(/^\./, '');
    const archiveFormat = ext || this.config.format;
    console.log(chalk.green(`------ start create ${archiveFormat} file ------`));
    const archive = { ...this.config.archive, ...options };
    const ac = archiver(archiveFormat, archive);
    const output = fs.createWriteStream(target);
    output.on('close', () => {
      console.log(`[${target}] ${Math.floor(ac.pointer() / 1024)} total KB`);
      callback && callback(target);
    });
    ac.on('error', err => {
      throw err;
    });
    ac.directory(source, false);
    ac.pipe(output);
    ac.finalize();
    console.log(chalk.green(`------ create archive ${archiveFormat} file successfully ------`));
    console.log(chalk.green(`------ archive ${archiveFormat} file path: ${target} `));
    return target;
  }
  create(options, callback) {
    const { cwd, filename, source, installDeps, installNode, format } = {
      ...this.config,
      ...options
    };
    const archiveDir = path.join(this.config.target, filename);
    const ext = EXT[format];
    assert(ext, 'invalid file format, only support zip or tar');
    const archiveFile = path.join(archiveDir, `${filename}.${ext}`);
    const target = path.join(archiveDir, 'dist');
    this.copyFile(source, target, cwd);
    if (installDeps) {
      this.installDeps(target);
    }
    if (installNode) {
      this.installNode().then(() => {
        this.archive(target, archiveFile, callback);
      }).catch(err => {
        throw err;
      });
    } else {
      this.archive(target, archiveFile, callback);
    }
  }
  zip(callback) {
    this.create({}, callback);
  }
  tar(callback) {
    this.create({ format: 'tar' }, callback);
  }
}
module.exports = Archive;