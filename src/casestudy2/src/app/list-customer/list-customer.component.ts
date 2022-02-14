import {Component, OnInit} from '@angular/core';
import {newArray} from '@angular/compiler/src/util';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

   public customerList: Array<Customer>;
  ngOnInit(): void {
  this.customerList = [
    {id: '01', name: 'nguyen van dong', date: '08-07-1998', code: 12300, phone: '094323219', email: 'nguyenvandong0798@gmail.com', address: 'quang nam', type: 'Diamond'},
    {id: '02', name: 'nguyen van lanh', date: '08-08-1998', code: 12301, phone: '094323219', email: 'nguyenvanlanh@gmail.com', address: 'da nang', type: 'Platinium'},
    {id: '03', name: 'nguyen thi thao', date: '08-07-1998', code: 12303, phone: '094323219', email: 'nguyenvandong0798@gmail.com', address: 'quang nam', type: 'Gold'},
  ];
  console.log(this.customerList);
}

  constructor() {
  }
}
