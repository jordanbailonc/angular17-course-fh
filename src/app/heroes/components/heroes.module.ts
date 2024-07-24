import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero.component";
import { ListComponent } from "./list.component";


@NgModule({
    declarations:[
        HeroComponent,
        ListComponent
    ],
    exports:[
        HeroComponent,
        ListComponent
    ],
    imports:[
        //Importante hacer este import para poder notificar que este Module
        //forma parte de un Module común dentro del proyecto
        CommonModule
    ]
})
export class HeroesModule{

}