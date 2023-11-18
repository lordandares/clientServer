export type ClientModel = {
    id: string,
    firstName: string
    lastName: string
    email: string
    events: EvntModel[]
  };
  
export type EvntModel = {
    id: string
    title: string
    startDateTime: string
};