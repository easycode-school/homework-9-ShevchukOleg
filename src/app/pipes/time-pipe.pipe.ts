import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {
  /**
   * transform - date handler
   * @param value - date
   * @param args - optional arguments
   */
  transform(value: Date, args?: any): any {
    const timeComparison: number = Date.now() - value.getTime();
    const dayOption = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const timeOption = {hour: '2-digit', minute: '2-digit'};
    switch (true) {
      case timeComparison >= 86400000:
      console.log(timeComparison);
      return `${value.toLocaleString('ua', dayOption)}  ${value.toLocaleString('ua', timeOption)}`;
      case timeComparison >= 7200000 && timeComparison < 86400000:
      console.log(timeComparison);
      return `${Math.floor(timeComparison / 3600000)} hours and ${Math.round((timeComparison % 3600000) / 60000)} minutes pass`;
      case timeComparison >= 300000 && timeComparison < 7200000:
      console.log(timeComparison);
      return ` ${Math.round((timeComparison % 3600000) / 60000)} minutes pass`;
      case timeComparison >= 0 && timeComparison < 300000:
      console.log(timeComparison);
      return `Just now`;
    }
  }

}
