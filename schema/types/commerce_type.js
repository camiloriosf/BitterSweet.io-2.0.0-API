const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const CommerceType = new GraphQLObjectType({
  name: 'CommerceType',
  fields: () => ({
    basicTransactions: { type: GraphQLBoolean },
    advancedTransactions: { type: GraphQLBoolean },
    basicSubscriptions: { type: GraphQLBoolean },
    advancedSubscriptions: { type: GraphQLBoolean }
  })
});

module.exports = CommerceType;