const mongoose = require('mongoose');
const User = mongoose.model('user');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;
const UserType = require('../types/user_type');

module.exports = {
  type: UserType,
  resolve(parentValue, {}, req) {
    const ip = req.headers['x-forwarded-for'] || 
      req.connection.remoteAddress || 
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
    return User.checkUser(ip, req.headers['user-agent']);
  }
};