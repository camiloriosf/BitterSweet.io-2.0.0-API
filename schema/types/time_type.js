const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLBoolean,
} = graphql;

const TimeType = new GraphQLObjectType({
  name: 'TimeType',
  fields: () => ({
    normal: { type: GraphQLBoolean },
    asap: { type: GraphQLBoolean },
    now: { type: GraphQLBoolean }
  })
});

module.exports = TimeType;