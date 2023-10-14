import gql from 'graphql-tag'

export const common = gql`
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

  type UnknownError implements BaseError {
    message: String!
  }
`
