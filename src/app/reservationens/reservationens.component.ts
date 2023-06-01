import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Model/Reservation/reservation';
import { Router } from '@angular/router';
import { ReservationserviceService } from '../Service/reservationservice/reservationservice.service';

@Component({
  selector: 'app-reservationens',
  templateUrl: './reservationens.component.html',
  styleUrls: ['./reservationens.component.css']
})
export class ReservationensComponent implements OnInit {


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
    this.router.navigate(['/Dashboardenseignant']);
  }
  onSubmit() {
    this.addReservation();
  }

}
