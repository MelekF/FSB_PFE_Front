import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/Model/Reservation/reservation';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationserviceService {

  errorMsg!: string;

  baseUrl = "http://localhost:8087";


  constructor(private httpClient: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>("http://localhost:8087/Reservations");
  }


  getReservationById(idReservation: any): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.baseUrl}/${idReservation}`);
  }

  CreateReservation(data: any): Observable<any> {
    return this.httpClient.post("http://localhost:8087/addReservation", data);
  }
  DeleteReservation(idreservation: any): Observable<any> {
    // return this.httpClient.delete("http://localhost:8087/deleteReservation/${idreservation}");
    return this.httpClient.delete("http://localhost:8087/deleteReservation/" + encodeURIComponent(idreservation));


  }









  // CreateReservation(reservation: Reservation) {
  //   const url = "http://localhost:8087/addReservation";

  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   const body = JSON.stringify(reservation);
  //   return this.httpClient.post(url, body, { headers });
  // }




  // UpdateReservation(idReservation: any, data: any): Observable<any> {
  //   return this.httpClient.put(`${this.baseUrl}/${idReservation}`, data);
  // // }/////////////////////////////////////////////////////////////////////
  // UpdateReservation(idReservation: any, data: any): Observable<any> {
  //   return this.httpClient.put(`http://localhost:8087/updateReservation/${idReservation}`, data);
  // }

  UpdateReservation(idReservation: any, reservation: Reservation): Observable<any> {
    return this.httpClient.put("http://localhost:8087/updateReservation/${idReservation}", reservation);
  }


  // deleteAllReservations(): Observable<any> {
  //   return this.httpClient.delete(this.baseUrl);
  // }

  getReservationByname(Reservationnom: any): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseUrl}?name=${Reservationnom}`);
  }

  // DeleteReservation(idReservation: any): Observable<any> {
  //   return this.httpClient.delete("http://localhost:8087/deleteReservation/${idReservation}",{headers: this.headers}).map(res => res.json()).catch(err => {
  //     return Observable.throw(err);
  // }

  //   DeleteReservation(idReservation: any): Observable<any> {
  //     return this.httpClient.delete("http://localhost:8087/deleteReservation/${idReservation}") .pipe(
  //       catchError(error => {
  //           let errorMsg: string;
  //           if (error.error instanceof ErrorEvent) {
  //               this.errorMsg = `Error: ${error.error.message}`;
  //           } else {
  //               this.errorMsg = this.getServerErrorMessage(error);
  //           }

  //           return throwError(errorMsg);
  //       })
  //   );
  // }

  // private getServerErrorMessage(error: HttpErrorResponse): string {
  // switch (error.status) {
  // case 404: {
  //   return `Not Found: ${error.message}`;
  // }
  // case 403: {
  //   return `Access Denied: ${error.message}`;
  // }
  // case 500: {
  //   return `Internal Server Error: ${error.message}`;
  // }
  // default: {
  //   return `Unknown Server Error: ${error.message}`;
  // }

  // }
  // }
}











