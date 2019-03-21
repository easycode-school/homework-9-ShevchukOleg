import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/singleUser';

@Injectable({
  providedIn: 'root'
})
export class DataControlService {
private apiUrl = environment.apiUrl;
public users: User[];

private _allUsers = new BehaviorSubject([]);
public allUsersObservableSubject = this._allUsers.asObservable();
public now = Date.now();

public comentsTime = {
  thisMoment: new Date(this.now) ,
  justNow: new Date(this.now - 180000),
  halfAnHour: new Date(this.now - 1800000),
  fiveHour: new Date(this.now - 18300000),
  moreOneDay: new Date(this.now - 100800000)
  };

  constructor(
    private http: HttpClient
  ) { }

  getInfo() {
    this.http.get(`${this.apiUrl}/users`).subscribe(
      (users: User[]) => {
        this.users = users;
        this._allUsers.next(this.users);
      },
      (error) => {console.log(error); },
      () => console.log('Робота з сервером завершена')
      );
  }

}
