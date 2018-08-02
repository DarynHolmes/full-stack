const { properties, customers, viewings } = require('../data')
const uuid = require('uuid/v4')

module.exports.resolvers = {
  Query: {
    properties: () => properties,
    property: (root, args) =>
      properties.find(property => args.id === property.id),
    customer: (root, args) =>
      customers.find(customer => args.id === customer.id),
    viewing: (root, args) =>
      viewings.find(viewing => args.id === viewing.id)
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
  },
  Property: {
    viewings(property) {
      return viewings.filter(viewing => viewing.propertyId === property.id)
    }
  },
  Customer: {
    viewings(customer) {
      return viewings.filter(viewing => viewing.customerId === customer.id)
    }
  },
  Viewing: {
    customer(viewing) {
      return customers.find(customer => customer.id === viewing.customerId)
    },
    property(viewing) {
      return properties.find(property => property.id === viewing.propertyId)
    }
  }
}
