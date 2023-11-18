import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { gql } from 'graphql-tag';
import { readFileSync } from 'node:fs'
import { resolvers } from '../../resolvers/resolvers';

const typeDefs = gql`${readFileSync('src/schema/schema.graphql', 'utf8')}`;

const server = new ApolloServer({ typeDefs, resolvers });

export const main: APIGatewayProxyHandler = server.createHandler();