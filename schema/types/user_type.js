const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    ip: { type: GraphQLString },
    userAgent: { type: GraphQLString },
    token: { type: GraphQLString }
  }
});

module.exports = UserType;