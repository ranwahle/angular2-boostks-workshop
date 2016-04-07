/**
 * Created by ranwahle on 22/03/2016.
 */
import {Component} from 'angular2/core';
import {NewGuess} from './NewGuess';
import {Guess} from './../Model/Guess';
import  {GuessDetails} from './GuessDetails'

@Component({
        selector: 'guessing-grid',
    template: `<h2>Guess</h2>

<div *ngFor="#guess of guesses">
<guess-details [guess]="guess">Loading...</guess-details>
</div>

            <new-guess [guess]="guess" (guessed)="onGuessed($event)">Loading...</new-guess>`,
    directives: [GuessDetails,NewGuess]
    }

)



export class GuessingGrid {
    guesses:any;
    constructor(){
        this.guesses =  [];

    }

    onGuessed(guessResult){
        this.guesses.push(guessResult);
    }
}