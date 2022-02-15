import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContractComponent } from './list-contract/contract.component';
import { ServiceComponent } from './list-service/service.component';
import { CustomerComponent } from './create-customer/customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContractComponent,
    ServiceComponent,
    CustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateContractComponent,
    CreateServiceComponent,
    EditServiceComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
