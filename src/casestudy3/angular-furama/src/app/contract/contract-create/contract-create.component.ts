import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
contractForm: FormGroup = new FormGroup({
  id: new FormControl('', Validators.required),
  dateIn: new FormControl(),
  dateOut: new FormControl(),
  deposit: new FormControl(),
  customerList: new FormControl()
});
contractList: Contract[];
customerList: Customer[];
  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private router: Router) {
    this.contractService.findAll().subscribe(c => {
      this.contractList = c;
      }, error => {
        console.log(error);
    });
  }

  ngOnInit(): void { this.getCustomer();
  }
  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      this.contractForm.reset();
      alert('success create');
      this.router.navigate(['/contract/list']);
    }, e => {
      console.log(e);
    });
  }
  getCustomer(){
    this.customerService.findAll().subscribe(value => {
      this.customerList = value;
    });
  }

}
