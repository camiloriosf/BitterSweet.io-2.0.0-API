const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const User = mongoose.model('user');
const QuoteType = require('./quote_type');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    ip: { type: GraphQLString },
    userAgent: { type: GraphQLString },
    token: { type: GraphQLString },
    quotes: {
      type: new GraphQLList(QuoteType),
      resolve(parentValue) {
        return User.findById(parentValue).populate('quotes')
          .then(user => user.quotes)
      }
    },
  })
});

module.exports = UserType;