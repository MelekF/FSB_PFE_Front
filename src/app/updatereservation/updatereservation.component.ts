import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Model/Reservation/reservation';
import { ReservationserviceService } from '../Service/reservationservice/reservationservice.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-updatereservation',
  templateUrl: './updatereservation.component.html',
  styleUrls: ['./updatereservation.component.css']
})
export class UpdatereservationComponent implements OnInit {

  reservation: Reservation = new Reservation;
  constructor(private service: ReservationserviceService, private router: Router) { }


  ngOnInit(): void {
  }


  updateReservation() {
    this.service.UpdateReservation(this.reservation.idreservation, this.reservation).subscribe({
      next: (res) => {
        console.log(res);
        this.gotoexelist();

      },
      error: (e) => console.error(e)
    });
  }

  // // }/////////////////////////////////////////////////////////////////////
  // updateReservation() {
  //   this.service.UpdateReservation(this.reservation.idreservation, this.reservation)
  //     .subscribe(
  //       reservation => {
  //         this.router.navigate(['/Reservation']);
  //       },
  //       error => {
  //         if (error instanceof HttpErrorResponse && error.status === 404) {
  //           console.log('The reservation does not exist.');
  //         } else {
  //           console.error(error);
  //         }
  //       });

  // }
  gotoexelist() {
    this.router.navigate(['/Reservation']);
  }
  onSubmit() {
    this.updateReservation();
  }

}
