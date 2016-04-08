/**
 * Created by ranwahle on 08/04/2016.
 */
import {Component} from 'angular2/core';
import {GuessingGrid} from './GuessingGrid.component';
import {GameManagerService} from "../services/GameManagerService";
import {TimeSpanPipe} from "../pipes/timespanPipe";

@Component({
    template: `<span *ngIf="gamerName" [textContent]="gamerName"></span>
            <guessing-grid>Loading...</guessing-grid>
    <button (click)="startGame()">Start game</button>
    <span [textContent]="gameLength | timespan"></span>`,
    directives: [GuessingGrid],
    pipes: [TimeSpanPipe]
})

export class GameComponent {
    gameLength: any;
    gamerName: string;
    constructor(private _gameManager:GameManagerService){
        this.gamerName = _gameManager.gamerName;
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