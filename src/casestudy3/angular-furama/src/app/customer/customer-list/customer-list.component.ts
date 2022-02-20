import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[];
  p = 1;
  name: any;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.customerService.findAll().subscribe(value => {
      this.customerList = value;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.customerList = this.customerList.filter(value => {
        return value.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }
}
