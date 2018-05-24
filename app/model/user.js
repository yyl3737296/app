module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    _id: { type: String  },
    name: { type: String  },
    password: { type: String  },
  });

  return mongoose.model('user', UserSchema, 'user');
}