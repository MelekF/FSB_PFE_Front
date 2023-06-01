import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Salle } from 'src/app/Model/Salle/salle';
@Injectable({
  providedIn: 'root'
})
export class SalleserviceService {


  baseUrl = "http://localhost:8087";


  constructor(private httpClient: HttpClient) {
  }

  getSalles(): Observable<Salle[]> {
    return this.httpClient.get<Salle[]>("http://localhost:8087/Salles");
  }


  getSalleById(idSalle: any): Observable<Salle> {
    return this.httpClient.get<Salle>(`${this.baseUrl}/${idSalle}`);
  }

  CreateSalle(data: any): Observable<any> {
    return this.httpClient.post("http://localhost:8087/addSalle", data);
  }
  DeleteSalle(idSalle: any): Observable<any> {
    return this.httpClient.delete("http://localhost:8087/deleteSalle/${idSalle}");
  }

}
