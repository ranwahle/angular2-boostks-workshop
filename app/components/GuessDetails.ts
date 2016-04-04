/**
 * Created by ranwahle on 30/03/2016.
 */
import {Component} from 'angular2/core';
import {GuessingResult} from "../Model/GuessingResult";
@Component({
    selector: 'guess-details',

    template: `<div style="clear:both;"><div *ngFor="#color of guess.guess.colors" 
        class="guessCell" style="background-color:{{color}};min-width: 25px; min-height: 25px;">
        </div>
        <div *ngFor="#result of guess.result" [textContent]="result + '|'" style="float:left;"></div>
        </div>`,
    inputs: ['guess'],
})


export class GuessDetails{
    public guess: GuessingResult
}