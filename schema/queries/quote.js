const mongoose = require('mongoose');
const Quote = mongoose.model('quote');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = graphql;
const QuoteType = require('../types/quote_type');

module.exports = {
  type: QuoteType,
  args: { token: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parentValue, {token}, req) {
    return Quote.createQuote(token)
  }
};