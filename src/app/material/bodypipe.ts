import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "shortInfo"
})

export class BodyPipe implements PipeTransform{
    transform(value: string) {
        if(typeof value == "string" && value.length>15){
            return value.substring(0,50) +  '...'
        }else{
            return value;
        }
    }
}