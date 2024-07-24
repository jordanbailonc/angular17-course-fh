import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'First Angular App';
  public name: string= 'Jordan'
  public age: number = 27
  public counter: number =10

  
}
