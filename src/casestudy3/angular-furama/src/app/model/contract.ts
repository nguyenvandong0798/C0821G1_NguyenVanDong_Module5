import {Customer} from './customer';

export interface Contract {
  id: number;
  dateIn: string;
  dateOut: string;
  deposit: number;
  customerList: Customer;
}
