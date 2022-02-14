import { Component, OnInit } from '@angular/core';
import {Contract} from '../model/contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  public contractList: Array<Contract>
  ngOnInit(): void {
    this.contractList = [
      {id: '01', idCustomer: '01', idService: '02', dateIn: '09-09-2020', dateOut: '20-06-2022', deposit: '1200'},
      {id: '02', idCustomer: '02', idService: '03', dateIn: '09-04-2020', dateOut: '20-06-2022', deposit: '1500'},
      {id: '03', idCustomer: '03', idService: '04', dateIn: '06-07-2022', dateOut: '20-06-2022', deposit: '1700'},
      {id: '04', idCustomer: '04', idService: '01', dateIn: '03-02-2021', dateOut: '20-06-2022', deposit: '1900'},
  ];
  }
constructor() { }
}
