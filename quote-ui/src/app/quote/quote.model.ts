import { Customer } from './customer.model';
import { Vehicle } from './vehicle.model';

export class Quote {
    public id: string;
    public type: string;
    public customers: Customer[];
    public vehicles: Vehicle[];
    public m_premium: string;
    public y_premium: string;

constructor(
     id: string,
     type: string,
     customers: Customer[],
     vehicles: Vehicle[],
     m_premium: string,
     y_premium: string
  ) {
       this.id = id;
       this.type = type;
       this.customers = customers;
       this.vehicles = vehicles;
       this.m_premium = m_premium;
       this.y_premium = y_premium;

   }
}
