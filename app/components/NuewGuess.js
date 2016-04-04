System.register(['angular2/core', "../services/GuessingService", "../Model/Guess"], function(exports_1, context_1) {
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
    var core_1, GuessingService_1, Guess_1;
    var NewGuess;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (GuessingService_1_1) {
                GuessingService_1 = GuessingService_1_1;
            },
            function (Guess_1_1) {
                Guess_1 = Guess_1_1;
            }],
        execute: function() {
            NewGuess = (function () {
                function NewGuess(guessingService) {
                    this.guessingService = guessingService;
                    this.guessed = new core_1.EventEmitter();
                    this.colorOptions = guessingService.getOptions();
                }
                NewGuess.prototype.SendNewGuess = function () {
                    var newGuess = new Guess_1.Guess();
                    newGuess.colors.push(this.color1, this.color2, this.color3, this.color4);
                    var guessReult = this.guessingService.calcGuess(newGuess);
                    //console.log( this.guessingService.calcGuess(newGuess));
                    this.guessed.emit({
                        guess: newGuess,
                        result: guessReult
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NewGuess.prototype, "guessed", void 0);
                NewGuess = __decorate([
                    core_1.Component({
                        selector: 'new-guess',
                        template: "<div style=\"clear:both;\">\n<select  [(ngModel)]=\"color1\"  style=\"background-color:{{color1}};\" >\n<option *ngFor=\"#color of colorOptions\">{{color}}</option>\n</select>\n<select  [(ngModel)]=\"color2\"  style=\"background-color:{{color2}};\" >\n<option *ngFor=\"#color of colorOptions\">{{color}}</option>\n</select>\n<select  [(ngModel)]=\"color3\"  style=\"background-color:{{color3}};\" >\n<option *ngFor=\"#color of colorOptions\">{{color}}</option>\n</select>\n<select  [(ngModel)]=\"color4\"  style=\"background-color:{{color4}};\" >\n<option *ngFor=\"#color of colorOptions\">{{color}}</option>\n</select>\n<button (click)=\"SendNewGuess()\">Guess</button>\n               </div>     "
                    }), 
                    __metadata('design:paramtypes', [GuessingService_1.GuessingService])
                ], NewGuess);
                return NewGuess;
            }());
            exports_1("NewGuess", NewGuess);
        }
    }
});
//# sourceMappingURL=NuewGuess.js.map