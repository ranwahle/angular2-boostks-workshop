/**
 * Created by ranwahle on 20/03/2016.
 */
import {Component} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import  {RegisterComponent} from './RegisterComponent'
import {GameComponent} from './GameComponent'
import {GameManagerService} from '../services/GameManagerService'
@Component({
    selector: 'my-app',
    template: `<h1>Color guessing game 2</h1>
     <nav>
    <a [routerLink]="['Register']">Register</a>
    <a [routerLink]="['Game']">Game</a>
  </nav>
 <router-outlet></router-outlet>
 `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ ROUTER_PROVIDERS,GameManagerService]


})

@RouteConfig([
    {
        path: '/Register',
        name: 'Register',
        component: RegisterComponent
    },{
        path: '/Game',
        name: 'Game',
        component: GameComponent
    }
])
export class AppComponent {
    // gameLength: any;
    // constructor(private _gameManager:GameManagerService){
    //
    // }
    //
    // handleTimerTick(gameStart){
    //     var newDate:any = new Date();
    //     this.gameLength = newDate - gameStart;
    // }
    //
    // startGame(){
    //     this._gameManager.startGame();
    //     this._gameManager.timerTickSubscribe(this.handleTimerTick, this);
    // }
}