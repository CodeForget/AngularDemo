import { Component, OnInit } from '@angular/core';
import {Customer} from './customer'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
public customer;
customers:Array<Customer>=new Array<Customer>();
  constructor() {
    this.customer=new Customer();
   }


  ngOnInit(): void {

  }

  addCustomer(){
    this.customers.push(this.customer);
    this.customer=new Customer();
  }

  EditCustomer(){

  }
  deleteCustomer(){

  }

  getAll(){

  }
  getById(){

  }
  getByContact(){

  }

}
