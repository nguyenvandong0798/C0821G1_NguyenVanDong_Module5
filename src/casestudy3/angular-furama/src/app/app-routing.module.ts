import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustmerCreateComponent} from './customer/custmer-create/custmer-create.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';
import {CustomerDeleteComponent} from './customer/customer-delete/customer-delete.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerUpdateComponent} from './customer/customer-update/customer-update.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: CustomerListComponent},
  {path: 'create', component: CustmerCreateComponent},
  {path: 'detail/:id', component: CustomerDetailComponent},
  {path: 'delete/:id', component: CustomerDeleteComponent},
  {path: 'update/:id', component: CustomerUpdateComponent},
  {path: 'contract/list', component: ContractListComponent},
  {path: 'contract/create', component: ContractCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
