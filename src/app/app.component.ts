import { Component } from '@angular/core';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'New Application';

  constructor(private route:Router){

  }

  firstPage(){
 this.route.navigate(['/']);
  }

  customerPage(){
this.route.navigate(['/customer']);
  }
}
