import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toArray'})
export class EnumToArrayPipe implements PipeTransform {
  transform(obj: any): Array<any> {
    const keys = Object.keys(obj).filter(key => isNaN(Number(obj[key])));
    return keys.map(key => {
      return {'value': key, 'label': obj[key]};
    });
  }
}
