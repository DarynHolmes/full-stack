const { gql } = require('apollo-server')

module.exports.typeDefs = gql`
  enum PropertyType {
    House
    Flat
  }

  enum Currency {
    GBP
    USD
  }

  type Property {
    id: ID
    price: Int
    currency: Currency
    propertyType: PropertyType
    shortDescription: String
    longDescription: String
    viewings: [Viewing]
  }

  type Customer {
    id: ID
    firstName: String
    lastName: String
    viewings: [Viewing]
  }

  type Viewing {
    id: ID
    customer: Customer
    property: Property
  }

  type Query {
    properties: [Property]
    property(id: ID): Property
    customer(id: ID): Customer
    viewing(id: ID): Viewing
  }

  type Mutation {
    addProperty(
      price: Int
      currency: Currency
      propertyType: PropertyType
      shortDescription: String
      longDescription: String
    ): Property
  }
`
