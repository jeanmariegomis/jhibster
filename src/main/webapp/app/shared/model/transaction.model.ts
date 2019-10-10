import { Moment } from 'moment';
import { IClient } from 'app/shared/model/client.model';
import { IUser } from 'app/core/user/user.model';

export interface ITransaction {
  id?: number;
  date?: Moment;
  frais?: string;
  comEnvoi?: string;
  comRetrait?: string;
  comSysteme?: string;
  comEtat?: string;
  clientEnvoi?: IClient;
  clientretrait?: IClient;
  userEnvoi?: IUser;
  userRetrait?: IUser;
}

export class Transaction implements ITransaction {
  constructor(
    public id?: number,
    public date?: Moment,
    public frais?: string,
    public comEnvoi?: string,
    public comRetrait?: string,
    public comSysteme?: string,
    public comEtat?: string,
    public clientEnvoi?: IClient,
    public clientretrait?: IClient,
    public userEnvoi?: IUser,
    public userRetrait?: IUser
  ) {}
}
