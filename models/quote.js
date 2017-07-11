const jwt = require('jwt-simple');
const _ = require('lodash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const UserSchema = new Schema({
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
    advanced: { type: Boolean, default: false }
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
    mvp: { type: Boolean, default: true },
    polished: { type: Boolean, default: false }
  },
  time: {
    normal: { type: Boolean, default: true },
    asap: { type: Boolean, default: false },
    now: { type: Boolean, default: false }
  },
  plan: {
    payg: { type: Boolean, default: true },
    installments: { type: Boolean, default: false },
    fee: { type: Boolean, default: false }
  },
  prices: {
    payg: { type: Number, default: 0 },
    installments: { type: Number, default: 0 },
    fee: { type: Number, default: 0 }
  },
  comments: { type: String, default: '' },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  saved: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date }
});

UserSchema.statics.createQuote = function (token) {
  const User = mongoose.model('user');
  const id = jwt.decode(token, config.secret).sub;
  return User.findById(id)
    .then(user => {
      if(user){
        const Quote = mongoose.model('quote');
        const quote = new Quote({ user: id, createdAt: Date.now() });
        user.quotes.push(quote.id);
        return user.save()
        .then(() => {return quote.save()})
      }

      return null;
    })
}

UserSchema.statics.updateQuote = function ({id, key1, key2, value}) {
  const Quote = mongoose.model('quote');
  return Quote.findById(id)
    .then(quote => {
      if(quote){
        if(key2 !== ''){
          quote[key1][key2] = value;
        }else{
          quote[key1] = value;
        }
        return quote.save()
          .then(quote => quote)
      }
      return null
    })
}

mongoose.model('quote', UserSchema);