const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const CommunicationType = new GraphQLObjectType({
  name: 'CommunicationType',
  fields: () => ({
    chat: { type: GraphQLBoolean },
    email: { type: GraphQLBoolean },
    push: { type: GraphQLBoolean },
    sms: { type: GraphQLBoolean }
  })
});

module.exports = CommunicationType;