const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const AdminType = new GraphQLObjectType({
  name: 'AdminType',
  fields: () => ({
    admin: { type: GraphQLBoolean },
    dashboard: { type: GraphQLBoolean },
    reports: { type: GraphQLBoolean }
  })
});

module.exports = AdminType;