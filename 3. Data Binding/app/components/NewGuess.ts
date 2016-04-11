/**
 * Created by ranwahle on 30/03/2016.
 */
import {Component, Output, EventEmitter} from 'angular2/core';
// import {GameManagerService} from "../services/GameManagerService";
// import {Guess} from "../Model/Guess";


@Component({
        selector: 'new-guess',
        template: `<div style="clear:both;">
<select  [(ngModel)]="color1"  style="background-color:{{color1}};" >
<option *ngFor="#color of colorOptions">
{{color}}</option>
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
    newGuess: any;

    constructor(){
        this.newGuess = {};
    }

    @Output()
    guessed = new EventEmitter()

    SendNewGuess(){
         this.guessed.emit({
            guess: true
        });
    }
}