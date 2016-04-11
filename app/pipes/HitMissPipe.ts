import {PipeTransform, Pipe} from "angular2/core";
/**
 * Created by ranwahle on 06/04/2016.
 */
@Pipe({name: 'hitMiss'})

export class HitMissPipe implements  PipeTransform{
    transform(value: string, args) : string{
        var result:string = value;
        var numberOfPipes:number = args[0];
        for  (var i:number = 0; i < numberOfPipes; i++){
            result += '|';
        }
        return result;
    }
}
