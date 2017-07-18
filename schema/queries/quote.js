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
  args: { id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parentValue, {id}, req) {
    return Quote.findById(id);
  }
};