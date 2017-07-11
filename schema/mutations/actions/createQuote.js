const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObject,
    GraphQLString,
    GraphQLNonNull
} = graphql;
const QuoteType = require('../../types/quote_type');
const Quote = mongoose.model('quote');

module.exports = {
    type: QuoteType,
    args: {
        token: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, { token }, req) {
        return Quote.createQuote(token)
    }
};