const { Book, User } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    books: async (parent, { bookId }) => {
      const params = bookId ? { bookId } : {};
      return Book.find(params);
    },
  },
  Mutation: {
    
  },
};

module.exports = resolvers;
