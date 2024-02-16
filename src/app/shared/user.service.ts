import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000";

  public logueado: boolean = false;
  public userId: number;
  public user: User;

  constructor(private http: HttpClient) { }

  public postRegister(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/register`, user);
  }

  public postLogin(credentials: { email: string, password: string }): Observable<any> { 
    return this.http.post<any>(`${this.url}/login`, credentials); 
  }

  public putUsuarios(userId: number, name: string, last_name: string, email: string, photo: string, password: string): Observable<any> {
    return this.http.put<any>(`${this.url}/users/${userId}`, { name, last_name, email, photo, password });
  }

}


