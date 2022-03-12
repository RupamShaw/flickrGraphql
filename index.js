import {ApolloServer} from 'apollo-server'
import { typeDefs } from "./schema";
import { Query } from "./resolvers/Query";
// const { Mutation } = require("./resolvers/Mutation");
import { Category } from  "./resolvers/Category";
import { Product } from  "./resolvers/Product";
import {data} from "./data/data"

const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Category,
    Product
  },
  context:{db:data},
  })

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});