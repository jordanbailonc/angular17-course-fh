import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './../hero/hero.component.html',
  styleUrl: './../hero/hero.component.css'
})
export class HeroComponent {
  public name:string = "IronMan"
  public age: number = 100

  getCapitalizeText():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(name:string):void{
      this.name= name
  }

  changeAge(age:number):void{
    this.age=age
  }

  isEqualsToIronMan():boolean{
    return this.name==="IronMan";
  }

  reset():void{
    this.name = "IronMan"
    this.age = 45
  }
  
}
