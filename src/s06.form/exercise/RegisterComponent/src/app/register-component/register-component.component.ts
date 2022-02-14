import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(){
    this.form = new FormGroup({
      'age': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(100)])
    });
  }

}
