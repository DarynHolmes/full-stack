import gql from 'graphql-tag'

export default gql`
  query getProperty($id: ID) {
    property(id: $id) {
      id
      shortDescription
      longDescription
      price
      currency
      propertyType
    }
  }
`
