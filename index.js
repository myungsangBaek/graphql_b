import { createServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = createServer({
  schema: {
    typeDefs: `
    type Movie {
        id: Int!
        name: String!
        score : Int!
      }
    type Query {
        movies: [Movie]!
        movie(id: Int!): Movie
      }
    type Mutation { 
        addMovie(name:String!, score: Int!): Movie!
    }
    `,
    resolvers,
  },
});

server.start();
