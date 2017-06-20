const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObject,
    GraphQLString,
    GraphQLNonNull
} = graphql;
const UserType = require('../../types/user_type');
const User = mongoose.model('user');

module.exports = {
    type: UserType,
    args: {
        token: { type: new GraphQLNonNull(GraphQLString) },
        action: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, { token, action }, req) {
        return User.logAction(token, action)
    }
};