module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: { type: String  },
    username: { type: String },
    password: { type: String  },
    tel: { type: String  },
    type: { type: Number }
  },{versionKey: false});

  return mongoose.model('User', UserSchema, 'User');
}