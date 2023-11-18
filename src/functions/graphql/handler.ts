import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

export const main: APIGatewayProxyHandler = server.createHandler();