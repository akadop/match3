import { gql } from 'react-apollo'

export default gql`
  query allCharacters {
    allCharacters {
      id
      name
      soundOnSelect {
        url
        id
      }
      image {
        url
        id
      }
    }
  }
`
