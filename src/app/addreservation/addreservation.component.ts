import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Model/Reservation/reservation';
import { ReservationserviceService } from '../Service/reservationservice/reservationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent implements OnInit {

  reservation: Reservation = new Reservation;
  constructor(private service: ReservationserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  addReservation() {
    this.service.CreateReservation(this.reservation)

      // .subscribe(data => {
      //   console.log(data);
      //   // this.gotoexelist();
      // })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.gotouserslist();

        },
        error: (e) => console.error(e)
      });

  }
  gotouserslist() {
    this.router.navigate(['/Reservation']);
  }
  onSubmit() {
    this.addReservation();
  }


}