import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../../services/data-control.service';
import { User } from '../../interfaces/singleUser';
import { MomemtOfTime } from '../../interfaces/timeMoment';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  /** users - local storage holding all users information
   */
  public users: User[] = [];
 /**
  * optionValuesNumberColumn - options for select tag that describe column with numbers
  */
  public optionValuesNumberColumn = [
    {value: 'none', viewValue: 'No' },
    {value: 'up', viewValue: '1-9' },
    {value: 'down', viewValue: '9-1' }
  ];
/**
 * optionValuesStringColumn - options for select tag that describe column with string type
 */
  public optionValuesStringColumn = [
    {value: 'none', viewValue: 'No' },
    {value: 'up', viewValue: 'A-Z' },
    {value: 'down', viewValue: 'Z-A' }
  ];
/**
 * pipeStates - current pipe parameters
 */
  public pipeStates = {
    colName: 'id',
    order: 'none'
  };
/**
 * messagesTime - conditionally defined moments of time
 */
  public messagesTime: MomemtOfTime;

  constructor(
    public dataControl: DataControlService
  ) { }
/**
 * at the moment of the start of the components, we get the data from the server about the users
 * then from the service we will draw data on the getting of messages time
 */
  ngOnInit() {
    this.dataControl.getInfo();
    this.dataControl.allUsersObservableSubject.subscribe((users: User[]) => {
      this.users = users.slice();
      this.messagesTime = this.dataControl.comentsTime;
    });
  }
  /**
   * chengePipeType - is  method that changes the sorting parameters
   * @param order - the parameter which determines the direction of sorting
   * @param colName - parameter that defines an array of data for sorting
   */
  chengePipeType(order: string, colName: string) {
    this.pipeStates.order = order;
    this.pipeStates.colName = colName;
    this.users = this.users.slice();
  }

}
