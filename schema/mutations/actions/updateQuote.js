const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObject,
    GraphQLString,
    GraphQLNonNull
} = graphql;
const GraphQLJSON = require('graphql-type-json');
const QuoteType = require('../../types/quote_type');
const Quote = mongoose.model('quote');

module.exports = {
    type: QuoteType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        key1: { type: GraphQLString },
        key2: { type: GraphQLString },
        value: { type: GraphQLString }
    },
    resolve(parentValue, {id, key1, key2, value}, req) {
        return Quote.updateQuote({id, key1, key2, value})
    }
};