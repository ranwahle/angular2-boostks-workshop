/**
 * Created by ranwahle on 20/03/2016.
 */
import {Component} from 'angular2/core';
import {GuessingGrid} from './GuessingGrid.component';
import {GameManagerService} from "../services/GameManagerService";
import {TimeSpanPipe} from "../pipes/timespanPipe";

@Component({
    selector: 'my-app',
    template: `<h1>Color guessing game 2</h1> <guessing-grid>Loading...</guessing-grid>
        <button (click)="startGame()">Start game</button>
        <span [textContent]="gameLength | timespan"></span>`,
    directives: [GuessingGrid],
    providers: [GameManagerService],
    pipes: [TimeSpanPipe]

})
export class AppComponent {
    gameLength: any;
    constructor(private _gameManager:GameManagerService){

    }

    handleTimerTick(gameStart){
        var newDate:any = new Date();
        this.gameLength = newDate - gameStart;
    }

    startGame(){
        this._gameManager.startGame();
        this._gameManager.timerTickSubscribe(this.handleTimerTick, this);
    }
}