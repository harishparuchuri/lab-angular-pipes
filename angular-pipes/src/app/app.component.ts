
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';


  name: string = 'Angular 4 Project!';
  todaydate = new Date();
  jsonval = { name: 'ajay', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };

}
