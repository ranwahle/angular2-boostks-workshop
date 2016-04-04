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
    var GuessDetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GuessDetails = (function () {
                function GuessDetails() {
                }
                GuessDetails = __decorate([
                    core_1.Component({
                        selector: 'guess-details',
                        template: "<div style=\"clear:both;\"><div *ngFor=\"#color of guess.guess.colors\" \n        class=\"guessCell\" style=\"background-color:{{color}};min-width: 25px; min-height: 25px;\">\n        </div>\n        <div *ngFor=\"#result of guess.result\" [textContent]=\"result + '|'\" style=\"float:left;\"></div>\n        </div>",
                        inputs: ['guess'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], GuessDetails);
                return GuessDetails;
            }());
            exports_1("GuessDetails", GuessDetails);
        }
    }
});
//# sourceMappingURL=GuessDetails.js.map