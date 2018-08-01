const { gql } = require('apollo-server')

module.exports.mutations = gql`
  type Mutation {
    addProperty: (
      price: Int,
      currency: String,
      propertyType: PropertyType,
      shortDescription: String
    )
  }
`
