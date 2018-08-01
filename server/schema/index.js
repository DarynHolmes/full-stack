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
  }

  type Query {
    properties: [Property]
    property(id: ID): Property
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
