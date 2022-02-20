import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/customerList';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }
  saveCustomer(customerObj: Customer): Observable<void>{
    return this.httpClient.post<void>(this.API_URL, customerObj);
  }
  findById(customerId: number): Observable<Customer>{
    return this.httpClient.get<Customer>(this.API_URL + '/' + customerId);
  }
  deleteId(id: number): Observable<Customer>{
    return this.httpClient.delete<Customer>(this.API_URL + '/' + id);
  }
  updateId(id: number, customer: Customer): Observable<Customer>{
    return this.httpClient.patch<Customer>(this.API_URL + '/' + id, customer);
  }
}

