import { gql } from 'react-apollo'

// this query is initiated when our payload containing the character ID is fired upon clicking the character portrait.

export default gql`
  query Character($characterId: ID!) {
    Character(id: $characterId) {
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
