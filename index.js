const { ApolloServer } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

//Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor listo en la url ${url}`);
});