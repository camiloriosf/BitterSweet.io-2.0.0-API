const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLString  
} = graphql;
const mongoose = require('mongoose');
const Quote = mongoose.model('quote');

const QuoteType = new GraphQLObjectType({
  name: 'QuoteType',
  fields: () => ({
    id: { type: GraphQLID },
    user: {
      type: require('./user_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue).populate('user')
          .then(quote => quote.user)
      }
    },
    NDA: { type: GraphQLBoolean },
    platforms: {
      type: require('./platforms_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.platforms)
      }
    },
    pages: { type: GraphQLInt },
    design: { type: GraphQLBoolean },
    authentication: {
      type: require('./authentication_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.authentication)
      }
    },
    data: {
      type: require('./data_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.data)
      }
    },
    geolocation: {
      type: require('./geolocation_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.geolocation)
      }
    },
    communication: {
      type: require('./communication_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.communication)
      }
    },
    apis: { type: GraphQLInt },
    commerce: {
      type: require('./commerce_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.commerce)
      }
    },
    admin: {
      type: require('./admin_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.admin)
      }
    },
    product: {
      type: require('./product_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.product)
      }
    },
    time: {
      type: require('./time_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.time)
      }
    },
    plan: {
      type: require('./plan_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.plan)
      }
    },
    prices: {
      type: require('./prices_type'),
      resolve(parentValue) {
        return Quote.findById(parentValue)
          .then(quote => quote.prices)
      }
    },
    comments: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    saved: { type: GraphQLBoolean },
  })
});

module.exports = QuoteType;