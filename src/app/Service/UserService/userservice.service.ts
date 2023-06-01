import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseUrl = "http://localhost:8087";



  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8087/users");
  }


  getUserById(iduser: any): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${iduser}`);
  }

  CreateUser(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }

  Updateuser(iduser: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${iduser}`, data);
  }

  Deleteuser(iduser: any): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${iduser}`);
  }

  // deleteAllusers(): Observable<any> {
  //   return this.httpClient.delete(this.baseUrl);
  // }

  getUserByname(usernom: any): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}?name=${usernom}`);
  }










}
