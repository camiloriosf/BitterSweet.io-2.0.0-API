const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const DataType = new GraphQLObjectType({
  name: 'DataType',
  fields: () => ({
    database: { type: GraphQLBoolean },
    media: { type: GraphQLBoolean },
    datasource: { type: GraphQLBoolean }
  })
});

module.exports = DataType;