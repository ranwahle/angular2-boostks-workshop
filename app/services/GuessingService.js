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
    var GuessingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GuessingService = (function () {
                function GuessingService() {
                    this.colorTable = ['black', 'white', 'yellow',
                        'green', 'red', 'blue', 'pink', 'brown',
                        'orange', 'purple'];
                }
                GuessingService.prototype.getOptions = function () {
                    return this.colorTable;
                };
                GuessingService.prototype.calcGuess = function (guess) {
                    if (!this.chosenColors) {
                        this.randomColors();
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
                    return result;
                };
                GuessingService.prototype.searchForMisses = function (color) {
                    return this.chosenColors.indexOf(color) >= 0;
                };
                GuessingService.prototype.randomColors = function () {
                    var result = [], colors;
                    colors = this.colorTable.slice();
                    for (var i = 0; i < 4; i++) {
                        var colorNumber = (Math.round(Math.random() * colors.length)) % colors.length;
                        result.push(colors[colorNumber]);
                        colors.splice(colorNumber, 1);
                    }
                    this.chosenColors = result;
                };
                GuessingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GuessingService);
                return GuessingService;
            }());
            exports_1("GuessingService", GuessingService);
        }
    }
});
//# sourceMappingURL=GuessingService.js.map