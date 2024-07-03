import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPropritaire'
})
export class SearchPropritairePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    // Convert args to lowercase for case-insensitive search
    args = args.toLowerCase();

    // Filter the value array based on code field
    return value.filter((item: any) => {
      // Adjust this condition based on your data structure
      return item.code.toLowerCase().includes(args);
    });
  }

}
