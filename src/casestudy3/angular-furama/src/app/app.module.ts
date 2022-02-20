import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './share/header/header.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustmerCreateComponent } from './customer/custmer-create/custmer-create.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CustomerListComponent,
    CustmerCreateComponent,
    CustomerDetailComponent,
    CustomerDeleteComponent,
    CustomerUpdateComponent,
    ContractListComponent,
    ContractCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
