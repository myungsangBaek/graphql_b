import { createServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = createServer({
  schema: {
    typeDefs: `
    type Movie {
        id: Int!
        title: String!
        rating : Float!
        description_intro: String
        language: String
        medium_cover_image: String
        genres: [String]
      }
    type Query {
        movies(limit: Int, rating: Float): [Movie]!
        movie(id: Int): Movie
        suggestions(id: Int!): [Movie]!
      }
    `,
    resolvers,
  },
});

server.start(() => console.log("Server Running"));
