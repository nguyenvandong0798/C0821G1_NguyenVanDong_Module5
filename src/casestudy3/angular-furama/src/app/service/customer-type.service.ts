import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})

export class CustomerTypeService {
  API_URL = 'http://localhost:3000/customerTypeList';

  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL);
  }
}
