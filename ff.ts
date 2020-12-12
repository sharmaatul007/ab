import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ff'
})
export class FfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}