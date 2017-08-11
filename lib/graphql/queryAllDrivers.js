import { gql } from 'react-apollo'

// this query is to be used for listing all available drivers and their portraits.

// only need the driver portrait, since the rest of the data will be loaded when a driver is selected.

export default gql`
  query allDrivers {
    allDrivers {
      id
      name
      image {
        url
        id
      }
    }
  }
`
