import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: '../../counter.component.html',
  styleUrl: '../../counter.component.css'
})
export class CounterComponent {
  public index: number = 10
  public sumatory: number =1
  public lessatory: number = -1
  
  increaseBy(value : number):void{
    this.index+=value
  }

  decreaseBy(value : number):void{
    this.index-=value
  }

  reset():void{
    this.index=10
  }
}
