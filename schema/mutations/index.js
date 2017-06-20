const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const logAction = require('./actions/logAction');

const rootFields = Object.assign({},
  {
    logAction,
  }
);

module.exports = new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => rootFields
});