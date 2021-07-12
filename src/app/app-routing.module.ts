import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
    {
    path: '', 
    component: FirstComponent
    },
  {
    path: 'customer', component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
