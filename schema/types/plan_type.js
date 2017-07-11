const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const PlanType = new GraphQLObjectType({
  name: 'PlanType',
  fields: () => ({
    payg: { type: GraphQLBoolean },
    installments: { type: GraphQLBoolean },
    fee: { type: GraphQLBoolean }
  })
});

module.exports = PlanType;