import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  formCustomer: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formCustomer = new FormGroup({
      id : new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }

}
