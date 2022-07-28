import { gql } from '@apollo/client';

export const GET_ME = gql`
    query Query {
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      title
      description
      image
      link
      authors
    }
  }
}
`