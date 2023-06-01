import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User/user';
import { UserserviceService } from '../Service/UserService/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membresadmin',
  templateUrl: './membresadmin.component.html',
  styleUrls: ['./membresadmin.component.css']
})
export class MembresadminComponent implements OnInit {
  Users?: User[];

  constructor(private userservice: UserserviceService, private router: Router) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe({
      next: (data) => { this.Users = data; console.log(data) }
    })

  }

  adduser() {
    this.userservice.CreateUser(this.Users)
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
    this.adduser();
  }
  DeleteReservation(idreservation: number) {

  }

}
