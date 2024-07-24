import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import {v4 as uuid} from 'uuid';


@Injectable(
    //al trabajar con el provideIn:'root' hace que donde se allame sea Singleton    
    {providedIn:'root'}
)
export class dbzService{
    
    
    constructor(){}

    public characters:Character[] = [{
        id:uuid(),
        name:'Krilin',
        power:1000
    },{
        id:uuid(),
        name:'Goku',
        power: 9500
    },{
        id:uuid(),
        name:'Vegeta',
        power:7750
    }]; 

    addCharacter(character:Character):void{
        const nwCharacter = {...character, id:uuid()   }
        this.characters.push(nwCharacter);    
    }

    deleteCharacterById(id?:string){
        this.characters= this.characters.filter(character=>character.id!=id);
    }

}