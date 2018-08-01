import gql from 'graphql-tag'

export default gql`
  query getProperties {
    properties {
      id
      shortDescription
      price
      currency
      propertyType
    }
  }
`
