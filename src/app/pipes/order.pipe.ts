import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if (!value) {
      value = [];
    }

    value.sort((a, b) => {
      return (args) ? b.id - a.id : a.id - b.id;
    });

    return value;
  }
}
