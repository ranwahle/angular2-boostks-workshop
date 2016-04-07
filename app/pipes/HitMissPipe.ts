import {PipeTransform, Pipe} from "angular2/core";
/**
 * Created by ranwahle on 06/04/2016.
 */
@Pipe({name: 'hitMiss'})

export class HitMissPipe implements  PipeTransform{
    transform(value: string) : string{
        return value + '|';
    }
}
