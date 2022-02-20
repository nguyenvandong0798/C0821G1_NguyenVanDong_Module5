import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-custmer-create',
  templateUrl: './custmer-create.component.html',
  styleUrls: ['./custmer-create.component.css']
})
export class CustmerCreateComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1}')]),
    codeId: new FormControl('', [Validators.required, Validators.pattern('^[K][H]-[\\d]{4}$')]),
    name: new FormControl(),
    date: new FormControl('', Validators.required),
    gender: new FormControl(),
    code: new FormControl('', [Validators.required, Validators.pattern('^(([0-9]{9})|([0-9]{12}))$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|031)+([0-9]{8})$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl(),
    type: new FormControl(),
  });
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerTypeService.findAll().subscribe(c => {
      this.customerTypeList = c;
    }, error => {
      console.log(error);
    });
  }


  ngOnInit(): void {
    // this.getAllCustomerType();
  }


  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.customerForm.reset();
      alert('success create');
      this.router.navigate(['/list']);
    }, e => {
      console.log(e);
    });
  }
}
