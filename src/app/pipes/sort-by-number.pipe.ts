import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/singleUser';

@Pipe({
  name: 'sortByNumber'
})
export class SortByNumberPipe implements PipeTransform {
  /**
   * data sorting function for user table
   * @param values - array of user data
   * @param order - direction of sorting
   * @param colName - column name for sorting
   */
  transform(values: User[], order: string, colName: string): User[] {
    if (colName === 'id') {
      console.log('Sort by numbers');
      switch (order) {
        case 'none':
        return values;
        case 'up':
        return values.slice().sort((prev: User, next: User) => {
          return prev[colName] - next[colName];
        });
        case 'down':
        return values.slice().sort((prev: User, next: User) => {
          return next[colName] - prev[colName];
        });
      }
    } else {
      console.log('Sort by signs');
      switch (order) {
        case 'none':
        return values;
        case 'up':
        return values.slice().sort(
          function(prev: User, next: User) {
          return prev[colName] > next[colName] ? 1 : (prev[colName] < next[colName] ? -1 : 0);
          }
        );
        case 'down':
        return values.slice().sort((prev: User, next: User) => {
          return prev[colName] < next[colName] ? 1 : (prev[colName] > next[colName] ? -1 : 0);
        });
      }
    }
  }
}
