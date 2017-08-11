import { gql } from 'react-apollo'

// this query is to be used for listing all available drivers and their portraits.

// only need the character portrait, since the rest of the data will be loaded when a character is selected.

export default gql`
  query allCharacters {
    allCharacters {
      id
      name
      image {
        url
        id
      }
    }
  }
`
