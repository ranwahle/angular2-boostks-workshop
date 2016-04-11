/**
 * Created by ranwahle on 04/04/2016.
 */
import {Injectable} from 'angular2/core';
import {Guess} from '../Model/Guess';
import {Http} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class GameManagerService{
    colorTable: any;
    chosenColors: any;
    gameStart: any;
    timerTickCallbacks: any;
    gameStopped: boolean;
    gamerName: string;
    constructor(private _http:Http){
        this.colorTable = ['black', 'white', 'yellow'
        , 'green', 'red', 'blue', 'pink', 'brown'
        ,'orange', 'purple'];

        this.timerTickCallbacks = [];
    }

    runCallbacks(){
        this.timerTickCallbacks.forEach(callbackObj =>{
            callbackObj.callback.call(callbackObj.context, this.gameStart);
        });
        if (!this.gameStopped)
        {
            setTimeout(() =>{
                this.runCallbacks();
            }, 1000);
        }
    }

    

    startGame(){
        this.randomColors();
        this.startTimer();
    }

    timerTickSubscribe(callback, context){
        this.timerTickCallbacks.push({callback:
        callback, context: context});
    }

    startTimer(){
        this.gameStart = new Date();
        setTimeout( () => {
            this.runCallbacks();

        });

    }

    stopTimer(){
        this.gameStopped = true;
    }


    getOptions(){
        return this.colorTable;
    }

    calcGuess(guess:Guess) : string[]{
        if (!this.chosenColors)
        {
            return ['Please start game'];
        }
        var result:string[] = [];
        for (var i = 0; i < guess.colors.length; i++){
            if (guess.colors[i] === this.chosenColors[i]){
                result.push('hit');
            }
            else{
                var miss = this.searchForMisses(guess.colors[i]);
                if (miss){
                    result.push('miss');
                }

            }
        }

        if (result.filter(guessResult => guessResult === 'hit').length
            === this.chosenColors.length)
        {
            this.stopTimer();
            this.finishGame();
        }
        return result;
    }

    finishGame(){
        this._http.post('http://localhost:8080/api/finishGame',
            JSON.stringify({name: this.gamerName,
       }) ).toPromise();
    }

    searchForMisses(color:string) : boolean{
        return this.chosenColors.indexOf(color) >= 0;
    }
    randomColors(){
        var result: any = [], colors: string[];
        colors = this.colorTable.slice();
       for (var i = 0; i < 4; i++){

           var colorNumber = (Math.round( Math.random() * colors.length)) % colors.length;
           result.push(colors[colorNumber]);
           colors.splice(colorNumber, 1);
       }
        this.chosenColors = result;
    }

    registerGamer(name:string){
        let self = this;
      return  this._http.post('http://localhost:8080/api',
          JSON.stringify( {name: name, date: new Date()}))
    .toPromise()
            .catch(err => console.log(err)).then(response => {
            console.log(response);
            self.gamerName = name;

        });
          // .map(result => {
          //     return <string>result.json().data;
          // })
          // .subscribe(data => {
          //     this.gamerName = data;
          //
          // })
;
    }

    // registerGamer(name:string) {
    //     let body = JSON.stringify({name});
    //     return  this._http.post('http://localhost:8080/api', body)
    //         .do(data =>
    //             console.log(data))
    //         .map(response => <string>response.json().data)
    //         .subscribe(data => this.gamerName = data);
    // }

}