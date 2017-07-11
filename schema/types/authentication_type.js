const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const AuthenticationType = new GraphQLObjectType({
  name: 'AuthenticationType',
  fields: () => ({
    email: { type: GraphQLBoolean },
    social: { type: GraphQLBoolean }
  })
});

module.exports = AuthenticationType;