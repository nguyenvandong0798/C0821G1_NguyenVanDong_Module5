import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeteleComponent} from './category-detele/category-detele.component';


const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'delete/:id',
    component: CategoryDeteleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
