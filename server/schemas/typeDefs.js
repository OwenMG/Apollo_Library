const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
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

  type Query {
    users: [User]
    books(bookId: String!): [Book]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
