const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const logAction = require('./actions/logAction');
const createQuote = require('./actions/createQuote');
const updateQuote = require('./actions/updateQuote');

const rootFields = Object.assign({},
  {
    logAction,
    createQuote,
    updateQuote,
  }
);

module.exports = new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => rootFields
});