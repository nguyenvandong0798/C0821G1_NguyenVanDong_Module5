import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  id: number;
  customerForm: FormGroup;
  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute){
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
}

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        codeId: new FormControl(customer.codeId),
        name: new FormControl(customer.name),
        date: new FormControl(customer.date),
        gender: new FormControl(customer.gender),
        code: new FormControl(customer.code),
        phone: new FormControl(customer.phone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address),
        type: new FormControl(customer.type),
      });
    });
  }
  deleteCustomer(id: number) {
    this.customerService.deleteId(id).subscribe(() => {
      this.router.navigate(['/list']);
    }, e => {
      console.log(e);
    });
  }
}
