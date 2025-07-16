import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  numbers = [1,2,3,4,5];
  evenNumbers = [2,4];
  oddNumbers = [1,3,5];
  onlyOdd = false;

}
