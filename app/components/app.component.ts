/**
 * Created by ranwahle on 20/03/2016.
 */
import {Component} from 'angular2/core';
import {GuessingGrid} from './GuessingGrid.component';
import {GuessingService} from "../services/GuessingService";

@Component({
    selector: 'my-app',
    template: `<h1>Color guessing game 2</h1> <guessing-grid>Loading...</guessing-grid>`,
    directives: [GuessingGrid],
    providers: [GuessingService]

})
export class AppComponent {
    
}