const jwt = require('jwt-simple');
const _ = require('lodash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const UserSchema = new Schema({
  ip: String,
  userAgent: String,
  createdAt: { type: Date, default: Date.now() },
  quotes: [{
    NDA: { type: Boolean, default: false },
    platforms: {
      web: { type: Boolean, default: false },
      android: { type: Boolean, default: false },
      ios: { type: Boolean, default: false },
      desktop: { type: Boolean, default: false },
    },    
    pages: { type: Number, default: 1 },
    design: { type: Boolean, default: false },
    authentication: {
      email: { type: Boolean, default: false },
      social: { type: Boolean, default: false },
    },
    data: {
      database: { type: Boolean, default: false },
      media: { type: Boolean, default: false },
      datasource: { type: Boolean, default: false },
    },
    geolocation: {
      simple: { type: Boolean, default: false },
    },
    communication: {
      chat: { type: Boolean, default: false },
      email: { type: Boolean, default: false },
      push: { type: Boolean, default: false },
      sms: { type: Boolean, default: false }
    },
    apis: { type: Number, default: 0 },
    commerce: {
      basicTransactions: { type: Boolean, default: false },
      advancedTransactions: { type: Boolean, default: false },
      basicSubscriptions: { type: Boolean, default: false },
      advancedSubscriptions: { type: Boolean, default: false }
    },
    admin: {
      admin: { type: Boolean, default: false },
      dashboard: { type: Boolean, default: false },
      reports: { type: Boolean, default: false }
    },
    product: {
      prototype: { type: Boolean, default: false },
      mvp: { type: Boolean, default: false },
      polished: { type: Boolean, default: false }
    },
    time: {
      normal: { type: Boolean, default: false },
      asap: { type: Boolean, default: false },
      now: { type: Boolean, default: false }
    },
    comments: String,
    name: String,
    email: String,
    saved: { type: Boolean, default: false },
    createdAt: {type: Date}
    
  }],
  log: [{
    actions: [{
      action: String,
      createdAt: { type: Date }  
    }],
    createdAt: { type: Date }
  }],
  quotes: [ { type: Schema.Types.ObjectId, ref: 'quote' } ]
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