/**
 * Created by ranwahle on 30/03/2016.
 */
import {Component, Output, EventEmitter} from 'angular2/core';
import {GuessingService} from "../services/GuessingService";
import {Guess} from "../Model/Guess";
import {GuessingResult} from "../Model/GuessingResult";

@Component({
        selector: 'new-guess',
        template: `<div style="clear:both;">
<select  [(ngModel)]="color1"  style="background-color:{{color1}};" >
<option *ngFor="#color of colorOptions">{{color}}</option>
</select>
<select  [(ngModel)]="color2"  style="background-color:{{color2}};" >
<option *ngFor="#color of colorOptions">{{color}}</option>
</select>
<select  [(ngModel)]="color3"  style="background-color:{{color3}};" >
<option *ngFor="#color of colorOptions">{{color}}</option>
</select>
<select  [(ngModel)]="color4"  style="background-color:{{color4}};" >
<option *ngFor="#color of colorOptions">{{color}}</option>
</select>
<button (click)="SendNewGuess()">Guess</button>
               </div>     `
    }
)

export class NewGuess{

    public color1: string;
    public  color2: string;
    public  color3: string;
    public  color4: string;
    colorOptions: any;

    constructor(private guessingService: GuessingService){
        this.colorOptions = guessingService.getOptions();

    }

    @Output()
    guessed = new EventEmitter()

    SendNewGuess(){
        var newGuess:Guess = new Guess();
        newGuess.colors.push(this.color1, this.color2, this.color3, this.color4);
        var guessReult = this.guessingService.calcGuess(newGuess);
         //console.log( this.guessingService.calcGuess(newGuess));
        this.guessed.emit({
            guess: newGuess,
            result: guessReult
        });
    }
}