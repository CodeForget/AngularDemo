import { Component, OnInit } from '@angular/core';
import {Model} from './model'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  userobj:Model=new Model();
  users:Array<Model>=new Array<Model>();
  Add(){
    this.users.push(this.userobj);
    this.userobj=new Model();
    
  }

  delete(){
    this.users.pop();
  }

}
