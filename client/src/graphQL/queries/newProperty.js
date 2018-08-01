import gql from 'graphql-tag'

export default gql`
  mutation(
    $price: Int
    $currency: Currency
    $propertyType: PropertyType
    $shortDescription: String
    $longDescription: String
  ) {
    addProperty(
      price: $price
      currency: $currency
      propertyType: $propertyType
      shortDescription: $shortDescription
      longDescription: $longDescription
    ) {
      id
      price
      currency
      propertyType
      shortDescription
    }
  }
`
