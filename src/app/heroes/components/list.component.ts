import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './../list/list.component.html',
  styleUrl: './../list/list.component.css'
})
export class ListComponent {
  public heroesName:string[] = ['Spiderman', 'Hulk', 'Captain America','Black Widow'];

  deleated : boolean = false;
  public deletedHero?:string;

  changeDeleated():boolean{
    return !this.deleated;
  }

  removeLastHero():void{
    this.deletedHero = this.heroesName.pop();
  }


}
