const jwt = require('jwt-simple');
const _ = require('lodash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const UserSchema = new Schema({
  ip: String,
  userAgent: String,
  createdAt: { type: Date, default: Date.now() },
  log: [{
    actions: [{
      action: String,
      createdAt: { type: Date }  
    }],
    createdAt: { type: Date }
  }]
});

UserSchema.virtual('token').get(function () {
  const timestap = new Date().getTime();
  return jwt.encode({ sub: this.id, iat: timestap }, config.secret)
});

UserSchema.statics.checkUser = function (ip, userAgent) {
  const User = mongoose.model('user');
  return User.findOne({ip, userAgent})
    .then(user => {
      if(user){
        user.log.push({createdAt: Date.now()})
        return user.save()        
      }
      
      const newUser = new User({ ip, userAgent });
      newUser.log.push({createdAt: Date.now()});

      return newUser.save()

    })
}

UserSchema.statics.logAction = function (token, action) {
  const User = mongoose.model('user');
  const id = jwt.decode(token, config.secret).sub;
  return User.findById(id)
    .then(user => {
      if(user){
        const log = _.reverse(_.sortBy(user.log, ['createdAt']))[0];
        log.actions.push({action, createdAt: Date.now()})
        return user.save()
      }

      return user;
    })
}

mongoose.model('user', UserSchema);