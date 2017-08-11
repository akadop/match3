# 3 Component Challenge

Built with: react + redux + graphql + styled components

## graphql schema.

```
type Asset implements Node {
  charactersImage: [Characters!]! @relation(name: "AssetCharactersImage")
  charactersSoundOnSelect: [Characters!]! @relation(name: "AssetCharactersSoundOnSelect")
  createdAt: DateTime!
  fileName: String
  handle: String
  height: Float
  id: ID! @isUnique
  mimeType: String
  size: Float
  updatedAt: DateTime!
  url: String
  width: Float
}

type Characters implements Node {
  createdAt: DateTime!
  id: ID! @isUnique
  image: Asset @relation(name: "AssetCharactersImage")
  isPublished: Boolean! @defaultValue(value: false)
  name: String
  soundOnSelect: Asset @relation(name: "AssetCharactersSoundOnSelect")
  updatedAt: DateTime!
}

type File implements Node {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type User implements Node {
  createdAt: DateTime!
  id: ID! @isUnique
  updatedAt: DateTime!
}
```