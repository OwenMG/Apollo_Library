const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    description: String!
    image: String
    link: String
    title: String!
    authors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    description: String!
    image: String
    link: String
    title: String!
    authors: [String]
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: String!): User
    
  }
`;

module.exports = typeDefs;
