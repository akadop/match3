# 3 Component Challenge

Built with: react + redux + graphql + styled components.

## Component Pathway 

Base (unstyled) component --> pass through styled function --> connect styled component to redux/apollo

## graphql schema.

```
type Asset implements Node {
  charactersImage: [Driver!]! @relation(name: "AssetCharactersImage")
  charactersSoundOnSelect: [Driver!]! @relation(name: "AssetCharactersSoundOnSelect")
  createdAt: DateTime!
  driverBackground: [Driver!]! @relation(name: "AssetDriverBackground")
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

type Driver implements Node {
  background: Asset @relation(name: "AssetDriverBackground")
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