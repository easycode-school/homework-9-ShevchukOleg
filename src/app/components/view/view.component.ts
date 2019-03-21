import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../../services/data-control.service';
import { User } from '../../interfaces/singleUser';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public users: User[] = [];

  public optionValuesNumberColumn = [
    {value: 'none', viewValue: 'No' },
    {value: 'up', viewValue: '1-9' },
    {value: 'down', viewValue: '9-1' }
  ];

  public optionValuesStringColumn = [
    {value: 'none', viewValue: 'No' },
    {value: 'up', viewValue: 'A-Z' },
    {value: 'down', viewValue: 'Z-A' }
  ];

  public pipeStates = {
    colName: 'id',
    order: 'none'
  };

  public messagesTime: any;

  constructor(
    public dataControl: DataControlService
  ) { }

  ngOnInit() {
    this.dataControl.getInfo();
    this.dataControl.allUsersObservableSubject.subscribe((users: User[]) => {
      this.users = users.slice();
      this.messagesTime = this.dataControl.comentsTime;
    });
  }
  chengePipeType(order: string, colName: string) {
    console.log(order);
    this.pipeStates.order = order;
    this.pipeStates.colName = colName;
    this.users = this.users.slice();
  }

}
