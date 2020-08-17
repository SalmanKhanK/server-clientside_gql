const { ApolloServer, gql } = require('apollo-server');
const student = [
    {
        id: 1,
        name: 'Harry Potter and the Chamber of Secrets',
        email: 'jk@gmail.com',
        age: 23
    },
    {
        id: 1,
        name: 'Harry Potter and the Chamber of Secrets',
        email: 'jkghj@gmail.com',
        age: 24
    },
    {
        id: 1,
        name: 'Harry Potter and the Chamber of Secrets',
        email: 'jkbhg@gmail.com',
        age: 25
    },
  ];
  const resolvers = {
    Query: {
      students: () => student,
    },
  };
const typeDefs = gql`
type Student {
    id: Int
    name: String
    email: String
    age: Int
  }
  type Query {
    students: [Student]
  }
`;
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});