import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isEven'
})

export class IsEvenPipe implements PipeTransform {
    
    transform(value: any) {
        var isEven = 'the number is odd';
        if(value % 2 == 0) {
            isEven = "the number is even";
        }
        return "The year: "+ value + " and " + isEven;
    }
}