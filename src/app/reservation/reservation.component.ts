import { Component, OnInit } from '@angular/core';
import { ReservationserviceService } from '../Service/reservationservice/reservationservice.service';
import { Reservation } from '../Model/Reservation/reservation';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservation?: Reservation[];
  idreservation?: number;
  errorMsg?: string;

  constructor(private service: ReservationserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getreservation();
    // this.DeleteReservation(this.idReservation);
  }

  getreservation(): void {
    this.service.getReservations().subscribe({
      next: (data) => {
        this.reservation = data;
        console.log(data)
      }
    })
  }

  // DeleteReservation(idReservation: number | undefined) {
  //   this.service.DeleteReservation(idReservation).subscribe({
  //     next: (data) => {
  //       this.reservation = data;
  //       console.log(data)
  //     }
  //   })
  // }



  // //this one works /////////////
  DeleteReservation(idreservation: number | undefined) {
    this.service.DeleteReservation(idreservation).subscribe({
      next: (data) => {
        // this.router.navigate(['/Reservation']);

        console.log(data)
      }
    });
  }

  // refresh() {
  //   window.location.reload();
  // }

  // DeleteReservation(idreservation: number | undefined) {
  //   this.service.DeleteReservation(idreservation)
  //   .map(response => response.json())
  //   .subscribe(data => {
  //        console.log(data)

  //   });
  // }








  // DeleteReservation(idReservation: number | undefined) {
  //   this.service.DeleteReservation(`http://localhost:8087/deleteReservation/${idReservation}`).subscribe(
  //     (res: Response) => {
  //       if (res.status === 200) {
  //         console.log('Reservation deleted successfully');
  //       } else {
  //         console.log('Error deleting reservation');
  //       }
  //     });

  // }

  // updatereservation(idReservation,reservation) {
  //   this.service.UpdateReservation(this.idReservation, this.reservation).subscribe({
  //     next: (data) => {
  //       this.reservation = data;
  //       console.log(data)
  //     }
  //   })

  // updatereservation(idReservation: number | undefined, reservation: Reservation) {
  //   this.router.navigate(['/updatereservation', idReservation])
  // }
  // updatereservation(idReservation: number | undefined, reservation: Reservation) {
  //   this.service.UpdateReservation(idReservation, reservation).subscribe(data => {
  //     this.getreservation()
  //   })

  // }s

  // DeleteReservation(idReservation: number | undefined) {
  //   this.service.DeleteReservation(idReservation).subscribe(data => {
  //     console.log("this :", data);

  //     this.getreservation();
  //     this.router.navigate(['/Reservations', idReservation])

  //   })

  // }


}