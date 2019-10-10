export interface IClient {
  id?: number;
  numpiece?: string;
  nom?: string;
}

export class Client implements IClient {
  constructor(public id?: number, public numpiece?: string, public nom?: string) {}
}
