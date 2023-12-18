import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pitufar'
})
export class PitufarPipe implements PipeTransform {

  transform(value: number): string 
  {
    let result: string;
    result = 'Ref:'+ value;

    return result;
  }

}
