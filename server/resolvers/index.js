const { properties } = require('../data')
const uuid = require('uuid/v4')

module.exports.resolvers = {
  Query: {
    properties: () => properties,
    property: (root, args) =>
      properties.find(property => args.id === property.id)
  },
  Mutation: {
    addProperty: (root, args) => {
      const property = {
        id: uuid(),
        price: args.price,
        currency: args.currency,
        propertyType: args.propertyType,
        shortDescription: args.shortDescription,
        longDescription: args.longDescription
      }
      properties.unshift(property)
      return property
    }
  }
}
