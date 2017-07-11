const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    prototype: { type: GraphQLBoolean },
    mvp: { type: GraphQLBoolean },
    polished: { type: GraphQLBoolean }
  })
});

module.exports = ProductType;