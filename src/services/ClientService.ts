import { ClientModel } from "../models/models";
import { data } from "../data/data";

export const getClientbyId = (id: string) : ClientModel => {
    const client: ClientModel = data.find(client => client.id === id)
    return client;
}

export const getclientList = () : ClientModel[] => {
    return data;
}