const properties = [
  {
    id: '9b0b4b62-a174-45c8-9f6d-181523e3322c',
    price: 168000, // price in GBP
    currency: 'GBP',
    propertyType: 'Flat',
    shortDescription:
      'This two-bedroom Flat is situated in an ideal location in Colchester.',
    longDescription:
      'Upon entering the property, the hallway leads you through to the beautiful lounge/diner which includes carpeted flooring and sliding doors leading out on to the terrace. Off of the lounge/diner is the kitchen which comes fully equipped with all necessary, built in units and integrated appliances. The main bedroom comprises built in mirrored wardrobes and boasts neutral décor with sliding doors opening out on to the terrace. Alongside a second bedroom including carpeted flooring, each room within the vicinity of one another. The stunning and modern designed main bathroom is also situated on this floor. All rooms include a spacious arrangement and have plenty of large windows that make the home well lit.'
  },
  {
    id: '4ccee659-90ce-4a6d-a7f1-50aea9345ac8',
    price: 450000, // price in GBP
    currency: 'GBP',
    propertyType: 'House',
    shortDescription:
      'Superbly located and spacious 2 double bedroom split level maisonette situated in a low rise ex local authority development tucked quietly behind Balls Pond Road & Newington Green.',
    longDescription:
      'The flat comprises of two good sized double rooms, separate kitchen and lounge. Off the lounge, a private balcony overlooks a communal outdoor space. Although the flat is ready to move in, there is scope to put your own stamp on it.'
  }
]

const customers = [
  {
    id: '9258d3ce-0bfa-4c00-8e96-60447ba076dc',
    firstName: 'Bob',
    lastName: 'West'
  },
  {
    id: 'b0911169-aa54-42e9-8c78-31f43d8ce684',
    firstName: 'Sue',
    lastName: 'South'
  },
  {
    id: 'ee914641-182c-4b1d-a585-9a98de7aa49e',
    firstName: 'Mark',
    lastName: 'East'
  },
  {
    id: '034174ba-514b-415d-98ef-b4c7b1f2850f',
    firstName: 'Clair',
    lastName: 'North'
  }
]

const viewings = [
  {
    id: 'cb7129b9-832b-4111-bf02-b641c996d0c5',
    propertyId: '9b0b4b62-a174-45c8-9f6d-181523e3322c',
    customerId: '9258d3ce-0bfa-4c00-8e96-60447ba076dc'
  },
  {
    id: 'd85d6380-5942-48c9-8ea9-dd7237356e4e',
    propertyId: '9b0b4b62-a174-45c8-9f6d-181523e3322c',
    customerId: 'b0911169-aa54-42e9-8c78-31f43d8ce684'
  },
  {
    id: 'f707b625-7170-4c9a-850b-c93c1516e9b1',
    propertyId: '4ccee659-90ce-4a6d-a7f1-50aea9345ac8',
    customerId: '9258d3ce-0bfa-4c00-8e96-60447ba076dc'
  },
  {
    id: '6fd14e6a-1429-4e04-94c0-72852f51b8a4',
    propertyId: '9b0b4b62-a174-45c8-9f6d-181523e3322c',
    customerId: 'ee914641-182c-4b1d-a585-9a98de7aa49e'
  },
  {
    id: 'd5029cdb-8c57-43e1-a537-0832eb1cb452',
    propertyId: '4ccee659-90ce-4a6d-a7f1-50aea9345ac8',
    customerId: '034174ba-514b-415d-98ef-b4c7b1f2850f'
  }
]

module.exports = { properties, customers, viewings }
