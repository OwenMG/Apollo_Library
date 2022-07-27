const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
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

  type Query {
    user: [User]
    books(bookId: String!): [Book]
  }

  type Mutation {
    
    login(username: String, password: String): User
  }
`;

module.exports = typeDefs;
