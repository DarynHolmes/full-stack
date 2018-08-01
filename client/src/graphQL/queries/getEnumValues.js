import gql from 'graphql-tag'

// A GraphQL introspection query
// Gets the list of enum values
// from a given enum name
export default gql`
  query getEnumValues($enumName: String!) {
    __type(name: $enumName) {
      enumValues {
        name
      }
    }
  }
`
