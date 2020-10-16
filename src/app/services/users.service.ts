import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get('http://localhost:3000/users').pipe(
      map( (res: UserModel[]) => res),
      catchError( (error) => {
        throw new Error('error in getUsers(). Details: ' + error.message);
      })
    );
  }
}
