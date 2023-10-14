import gql from 'graphql-tag'

export const user = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    role: String!
    createdAt: Float!
    updatedAt: Float!
  }

  type Users {
    users: [User]
  }

  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    role: String!
  }

  input UserBy {
    id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    role: String
  }

  union UserResult =
      User
    | Users
    | DatabaseError
    | InvalidInputError
    | UnknownError
    | NotFoundError
    
  type Query {
    findUser(by: UserBy!): UserResult!
    getUser(id: String!): UserResult!
  }

  type Mutation {
    createUser(input: UserInput!): UserResult!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`
