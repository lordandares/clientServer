import { Resolvers } from "./resolvers-types";
import { data } from "../data/data";

export const resolvers: Resolvers = {
  Query: {
    findClientById: (_parent, args) => {
      return data.find(client => client.id === args.id);
    },
    queryClientList: () => {
        return data;
    }
  },
  Mutation: {
    deleteClient: () => {
        return true;
    }
  },
  Client: {
    id: client => client.id,
    email: client => client.email,
    lastName: client => client.lastName,
    firstName: client => client.firstName
  },
  Event: {
    id: client => client.id,
    title: client => client.title,
    startDateTime: client => client.startDateTime
  }
};
