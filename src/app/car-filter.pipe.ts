import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'carFilter',
  pure: true
})
export class CarFilterPipe implements PipeTransform {
  transform(carList, searchStr: string, fieldName: string) {
    console.log('Filter start');
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }
    return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
