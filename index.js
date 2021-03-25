const {ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers');
const {MONGODB} = require('./config.js');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGODB,{useNewUrlParser: true}).then(()=>{
  console.log("db is connected");
  return server.listen({port:5000})
}).then(result => {
  console.log(`Server is running at ${result.url}`);
})