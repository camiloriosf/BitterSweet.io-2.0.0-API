const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLInt,
} = graphql;

const PricesType = new GraphQLObjectType({
  name: 'PricesType',
  fields: () => ({
    payg: { type: GraphQLInt },
    installments: { type: GraphQLInt },
    fee: { type: GraphQLInt }
  })
});

module.exports = PricesType;