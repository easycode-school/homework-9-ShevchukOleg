import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/singleUser';
import { MomemtOfTime } from '../interfaces/timeMoment';

@Injectable({
  providedIn: 'root'
})

export class DataControlService {
  /**
   * apiUrl - assigning a path to the request
   */
  private apiUrl = environment.apiUrl;
  /**
   * variable to save server response about users
   */
  public users: User[];
  /**
   * BS to transfer user data
   */
  private _allUsers = new BehaviorSubject([]);
  /**
   * the appointment of an observer
   */
  public allUsersObservableSubject = this._allUsers.asObservable();
  /**
   * declaration of download time of the application
   */
  public now = Date.now();

  /**
   * conditional assignment of moments of receipt of messages
   */
  public comentsTime: MomemtOfTime = {
    thisMoment: new Date(this.now) ,
    justNow: new Date(this.now - 180000),
    halfAnHour: new Date(this.now - 1800000),
    fiveHour: new Date(this.now - 18300000),
    moreOneDay: new Date(this.now - 100800000)
  };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * at the time of launch of the service there is a request to the server to receive a list of users
   * receive a response and broadcast data into a component
   */
  getInfo() {
    this.http.get(`${this.apiUrl}/users`).subscribe(
      (users: User[]) => {
        this.users = users;
        this._allUsers.next(this.users);
      },
      (error) => {console.log(error); },
      () => console.log('Data is received')
      );
  }

}
