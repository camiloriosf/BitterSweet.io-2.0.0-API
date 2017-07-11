const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const GeolocationType = new GraphQLObjectType({
  name: 'GeolocationType',
  fields: () => ({
    simple: { type: GraphQLBoolean },
    advanced: { type: GraphQLBoolean },
  })
});

module.exports = GeolocationType;