
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technicien } from 'src/app/Model/Technicien/technicien';

@Injectable({
  providedIn: 'root'
})
export class TechnicienServiceService {
  private api = "http://localhost:8080/tech";


  constructor(private httpClient: HttpClient) { }
  getTechniciens(): Observable<Technicien[]> {
    return this.httpClient.get<Technicien[]>(this.api);
  }
}
