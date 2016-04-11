/**
 * Created by ranwahle on 20/03/2016.
 */
import {Component} from 'angular2/core';
import {GameComponent} from "./GameComponent";

@Component({
    selector: 'my-app',
    template: `<h1>Color guessing game 2</h1>
           <game-component>Loading...</game-component>`,
   directives: [GameComponent]



})


export class AppComponent {
   
}