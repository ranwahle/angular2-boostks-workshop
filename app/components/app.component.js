System.register(['angular2/core', './GuessingGrid.component', "../services/GameManagerService", "../pipes/timespanPipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, GuessingGrid_component_1, GameManagerService_1, timespanPipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (GuessingGrid_component_1_1) {
                GuessingGrid_component_1 = GuessingGrid_component_1_1;
            },
            function (GameManagerService_1_1) {
                GameManagerService_1 = GameManagerService_1_1;
            },
            function (timespanPipe_1_1) {
                timespanPipe_1 = timespanPipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_gameManager) {
                    this._gameManager = _gameManager;
                }
                AppComponent.prototype.handleTimerTick = function (gameStart) {
                    var newDate = new Date();
                    this.gameLength = newDate - gameStart;
                };
                AppComponent.prototype.startGame = function () {
                    this._gameManager.startGame();
                    this._gameManager.timerTickSubscribe(this.handleTimerTick, this);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Color guessing game 2</h1> <guessing-grid>Loading...</guessing-grid>\n        <button (click)=\"startGame()\">Start game</button>\n        <span [textContent]=\"gameLength | timespan\"></span>",
                        directives: [GuessingGrid_component_1.GuessingGrid],
                        providers: [GameManagerService_1.GameManagerService],
                        pipes: [timespanPipe_1.TimeSpanPipe]
                    }), 
                    __metadata('design:paramtypes', [GameManagerService_1.GameManagerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map