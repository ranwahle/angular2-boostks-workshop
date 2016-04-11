/**
 * Created by ranwahle on 11/04/2016.
 */

 import  {Directive, ElementRef} from 'angular2/core';
 @Directive({
     selector: '[blink]'
 })
export class BlinkingDiv{
     constructor(elementRef:ElementRef){
         setTimeout(() =>
             this.blinkElement(elementRef.nativeElement) )
     }

     blinkElement(element){
         if (element.style.display !== 'none'){
             element.style.display = 'none';
         }
         else{
             element.style.display = '';
         }
        setTimeout(() =>
            this.blinkElement(element), 1000);
     }
 }