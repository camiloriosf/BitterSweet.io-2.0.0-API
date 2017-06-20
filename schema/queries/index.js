const graphql = require('graphql');
const {
  GraphQLObjectType
} = graphql;
const user = require('./user');

const rootFields = Object.assign({},
  {
    user
  }
);

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => rootFields
});