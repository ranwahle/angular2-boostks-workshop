/**
 * Created by ranwahle on 11/04/2016.
 */
import {Component} from 'angular2/core';
import  {NewGuess} from './NewGuess';

@Component(    {
    selector: 'game-component',
    template :`<h2>Game</h2>
<new-guess (guessed)="guess($event)"></new-guess>`,

    directives: [NewGuess]

    }
)

export  class GameComponent{
    guess(data){
        console.log(data);
    }
}