import gql from "graphql-tag"


export const user = gql`
    directive @oneOf on INPUT_OBJECT | FIELD_DEFINITION

    interface BaseError {
        message: String!
    }

    type NotFoundError implements BaseError {
        message: String!
    }

    type InputErrorField {
        code: String!
        fatal: String
        message: String!
        path: [String]!
    }

    type DatabaseError implements BaseError {
        message: String!
    }

    type InvalidInputError implements BaseError {
        fields: [InputErrorField]
        message: String!
    }

    type NotUniqueError implements BaseError {
        field: InputErrorField!
        message: String!
    }

    type UnknownError implements BaseError {
        message: String!
    }

    type User {
        user: ID!
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        role: String!
        createdAt: Float!
        updatedAt: Float!
    }

    input UserInput {
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        role: String!
    }

    input UserBy @oneOf {
        user: ID!
        email: String
        username: String
    }

    union CreateUserResult = User | DatabaseError | InvalidInputError | NotUniqueError | UnknownError

    type Query {
        userBy(by: UserBy!): User!
    }

    type Mutation {
        createUser(input: UserInput!): CreateUserResult!
    }

    schema { 
        query: Query
        mutation: Mutation
    }
`