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
        key: { type: GraphQLJSON }
    },
    resolve(parentValue, {id, key}, req) {
        const fields = JSON.parse(key);
        return Quote.updateQuote({id, fields})
    }
};