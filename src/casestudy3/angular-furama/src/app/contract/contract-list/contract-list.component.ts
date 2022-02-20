import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contarct-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList: Contract[];
  constructor(private contractService: ContractService) {
    this.contractService.findAll().subscribe(value => {
      this.contractList = value;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  ngOnInit(): void {
  }

}
