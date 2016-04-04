System.register(['angular2/core', './NuewGuess', './GuessDetails'], function(exports_1, context_1) {
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
    var core_1, NuewGuess_1, GuessDetails_1;
    var GuessingGrid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NuewGuess_1_1) {
                NuewGuess_1 = NuewGuess_1_1;
            },
            function (GuessDetails_1_1) {
                GuessDetails_1 = GuessDetails_1_1;
            }],
        execute: function() {
            GuessingGrid = (function () {
                function GuessingGrid() {
                    this.guesses = [];
                }
                GuessingGrid.prototype.onGuessed = function (guessResult) {
                    this.guesses.push(guessResult);
                };
                GuessingGrid = __decorate([
                    core_1.Component({
                        selector: 'guessing-grid',
                        template: "<h2>Guess</h2>\n\n<div *ngFor=\"#guess of guesses\">\n<guess-details [guess]=\"guess\">Loading...</guess-details>\n</div>\n\n            <new-guess [guess]=\"guess\" (guessed)=\"onGuessed($event)\">Loading...</new-guess>",
                        directives: [GuessDetails_1.GuessDetails, NuewGuess_1.NewGuess]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GuessingGrid);
                return GuessingGrid;
            }());
            exports_1("GuessingGrid", GuessingGrid);
        }
    }
});
//# sourceMappingURL=GuessingGrid.component.js.map