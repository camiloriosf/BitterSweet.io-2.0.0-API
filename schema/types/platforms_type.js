const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const PlatformsType = new GraphQLObjectType({
  name: 'PlatformsType',
  fields: () => ({
    web: { type: GraphQLBoolean },
    android: { type: GraphQLBoolean },
    ios: { type: GraphQLBoolean },
    desktop: { type: GraphQLBoolean }
  })
});

module.exports = PlatformsType;