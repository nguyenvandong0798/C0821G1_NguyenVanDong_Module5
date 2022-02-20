import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  API_URL = 'http://localhost:3000/contract';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_URL);
  }

  saveContract(contractObj: Contract): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, contractObj);
  }
}
