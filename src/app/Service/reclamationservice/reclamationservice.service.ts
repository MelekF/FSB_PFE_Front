import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/app/Model/Reclamation/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationserviceService {


  private baseUrl = "http://localhost:8087";


  constructor(private httpClient: HttpClient) { }

  getReclamations(): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>("http://localhost:8087/Reclamations");
  }




  getReclamationById(idReclamation: any): Observable<Reclamation> {
    return this.httpClient.get<Reclamation>(`${this.baseUrl}/${idReclamation}`);
  }

  CreateReclamation(data: any): Observable<any> {
    return this.httpClient.post("http://localhost:8087/addReclamation", data);
  }

  UpdateReclamation(idReclamation: any, Reclamation: Reclamation): Observable<any> {
    return this.httpClient.put("http://localhost:8087/updateReclamation/${idReclamation}", Reclamation);
  }

  DeleteReclamation(idreclamation: any): Observable<any> {
    // return this.httpClient.delete("http://localhost:8087/deleteReclamation/${idreclamation}");
    return this.httpClient.delete("http://localhost:8087/deleteReservation/" + encodeURIComponent(idreclamation));

  }

  // deleteAllReclamations(): Observable<any> {
  //   return this.httpClient.delete(this.baseUrl);
  // }

  getReclamationByname(Reclamationnom: any): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>(`${this.baseUrl}?name=${Reclamationnom}`);
  }
}
