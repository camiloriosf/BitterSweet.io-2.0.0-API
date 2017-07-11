const graphql = require('graphql');
const {
  GraphQLObjectType
} = graphql;
const user = require('./user');
const quote = require('./quote');

const rootFields = Object.assign({},
  {
    user,
    quote
  }
);

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => rootFields
});