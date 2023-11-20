import { Resolvers } from "./resolvers-types";
import { getClientbyId, getclientList } from "../services/ClientService";

export const resolvers: Resolvers = {
  Query: {
    findClientById: (_parent, args) => getClientbyId(args.id),
    queryClientList: () => getclientList()
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
