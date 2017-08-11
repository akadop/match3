import { gql } from 'react-apollo'

// this query is initiated when our payload containing the driver ID is fired upon clicking the driver portrait.

export default gql`
  query Driver($driverId: ID!) {
    Driver(id: $driverId) {
      id
      name
      image {
        url
      }
      soundOnSelect {
        url
        id
      }
    }
  }
`
