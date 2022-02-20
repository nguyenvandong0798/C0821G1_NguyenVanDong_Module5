import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerForm: FormGroup;
  id: number;
  customerTypeList: CustomerType[];
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
    this.customerTypeService.findAll().subscribe(value => {
      this.customerTypeList = value;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        // id: new FormControl(customer.id,  [Validators.required, Validators.pattern('[0-9]{1}')]),
        codeId: new FormControl(customer.codeId,  [Validators.required, Validators.pattern('^[K][H]-[\\d]{4}$')]),
        name: new FormControl(customer.name),
        date: new FormControl(customer.date,  Validators.required),
        gender: new FormControl(customer.gender),
        code: new FormControl(customer.code, [Validators.required, Validators.pattern('^(([0-9]{9})|([0-9]{12}))$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(090|031)+([0-9]{8})$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address),
        type: new FormControl(customer.type),
      });
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateId(id, customer).subscribe(() => {
      alert(' update success');
      this.router.navigate(['/list']);
    }, e => {
      console.log(e);
    });
  }
}
