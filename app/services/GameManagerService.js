System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var GameManagerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GameManagerService = (function () {
                function GameManagerService() {
                    this.colorTable = ['black', 'white', 'yellow',
                        'green', 'red', 'blue', 'pink', 'brown',
                        'orange', 'purple'];
                    this.timerTickCallbacks = [];
                }
                GameManagerService.prototype.runCallbacks = function () {
                    var _this = this;
                    this.timerTickCallbacks.forEach(function (callbackObj) {
                        callbackObj.callback.call(callbackObj.context, _this.gameStart);
                    });
                    if (!this.gameStopped) {
                        setTimeout(function () {
                            _this.runCallbacks();
                        }, 1000);
                    }
                };
                GameManagerService.prototype.startGame = function () {
                    this.randomColors();
                    this.startTimer();
                };
                GameManagerService.prototype.timerTickSubscribe = function (callback, context) {
                    this.timerTickCallbacks.push({ callback: callback, context: context });
                };
                GameManagerService.prototype.startTimer = function () {
                    var _this = this;
                    this.gameStart = new Date();
                    setTimeout(function () {
                        _this.runCallbacks();
                    });
                };
                GameManagerService.prototype.stopTimer = function () {
                    this.gameStopped = true;
                };
                GameManagerService.prototype.getOptions = function () {
                    return this.colorTable;
                };
                GameManagerService.prototype.calcGuess = function (guess) {
                    if (!this.chosenColors) {
                        return ['Please start game'];
                    }
                    var result = [];
                    for (var i = 0; i < guess.colors.length; i++) {
                        if (guess.colors[i] === this.chosenColors[i]) {
                            result.push('hit');
                        }
                        else {
                            var miss = this.searchForMisses(guess.colors[i]);
                            if (miss) {
                                result.push('miss');
                            }
                        }
                    }
                    if (result.filter(function (guessResult) { return guessResult === 'hit'; }).length
                        === this.chosenColors.length) {
                        this.stopTimer();
                    }
                    return result;
                };
                GameManagerService.prototype.searchForMisses = function (color) {
                    return this.chosenColors.indexOf(color) >= 0;
                };
                GameManagerService.prototype.randomColors = function () {
                    var result = [], colors;
                    colors = this.colorTable.slice();
                    for (var i = 0; i < 4; i++) {
                        var colorNumber = (Math.round(Math.random() * colors.length)) % colors.length;
                        result.push(colors[colorNumber]);
                        colors.splice(colorNumber, 1);
                    }
                    this.chosenColors = result;
                };
                GameManagerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GameManagerService);
                return GameManagerService;
            }());
            exports_1("GameManagerService", GameManagerService);
        }
    }
});
//# sourceMappingURL=GameManagerService.js.map