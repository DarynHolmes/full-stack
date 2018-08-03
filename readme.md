# Full-Stack App Challenge

This prototype is aimed at employees, enabling them to add and view properties.

## Project Structure

There are two projects within this repository, client and server. You need to use ``npm install` within each of these project folders.

### Server

The server is an Apollo GraphQL server. It was created by following the instructions on https://www.apollographql.com/server. This was not generated through the Vue CLI - which is an alternative an option.

### Getting Started

To start the server navigate to the server folder and use:

```
npm install
npm run serve
```

This project uses `node-dev`. This will restart the server when a file is changed. To use this option use:

```
npm run dev
```

### Data Persistance

Data in this application is not persisted. The data is simply kept in memory. This is due to time constraints when implementing the prototype.

### Running Queries

Once the server is up and running, we can use GraphQL Playground to run queries. GraphQL Playground can be opened by navigating this this URL in a browser: http://localhost:4000/

These are some example queries:

Fetch all properties:

```
query{
  properties{
    id
    shortDescription
    longDescription
    price
    currency
  }
}
```

Fetch a single property (use a valid id)

```
{
  property(id: "4ccee659-90ce-4a6d-a7f1-50aea9345ac8") {
    id
    shortDescription
    price
  }
}
```

Fetch a single property with viewings (use a valid id)

```
{
  property(id: "4ccee659-90ce-4a6d-a7f1-50aea9345ac8") {
    id
    shortDescription
    price
    viewings {
      dateTime
      customer {
        firstName
        lastName
      }
    }
  }
}
```

To add a property, run the following mutation:

```
mutation {
  addProperty(price: 100, currency: USD, shortDescription: "A short description", longDescription: "The long description", propertyType: House) {
    id
    price
    currency
    shortDescription
    longDescription
  }
}
```

### Client

The client application is a Vue app, created using Vue CLI 3. This project uses the GraphQL client from akryum - https://akryum.github.io/vue-apollo/

This project is configured to use Vuex, Jest and Cypress testing, however those technologies have not been used in this prototype.

### Getting Started

The client application requires the server to be started.

To start the client navigate to the client folder and run:

```
npm install
npm run serve
```

Then open this URL: http://localhost:8080/

### Interacting with the app

When the application opens at http://localhost:8080/, it will redirect to http://localhost:8080/#/properties/.

On this page you will be able to add a new property. There is basic validation on this form, ensuring that required fields are provided. The validation is done through the use of vuelidate - https://github.com/monterail/vuelidate

To view the details of an individual property, click on a property on the list on the left. This will show the details of the property, including the long description.

To return to adding a property, click the '+' button near the bottom right. This button is on visible if you are not already on the new property page.

### Polling

The app polls for new properties. This can be seen in `client/src/components/property/PropertiesList.vue`

```JavaScript
export default {
  name: 'properties-list',
  components: {
    PropertiesListItem
  },
  apollo: {
    properties: {
      query: GET_PROPERTIES_QUERY,
      pollInterval: 5000,
      error(error) {
        console.error('Error ', error)
      }
    }
  }
}
```

This means the property list will be periodically updated, and newly added properties (via another interface) will be shown.

Apollo GraphQL libraries do support subscriptions. Subscriptions use websockets to keep data up to date, through a push mechanism. This is often preferable to a polling mechanism.

## Questions?

Please contact me should you have any questions, or issues with getting the application running.
