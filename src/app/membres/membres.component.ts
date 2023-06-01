import { Component, OnInit } from '@angular/core';
import { Technicien } from '../Model/Technicien/technicien';
import { TechnicienServiceService } from '../Service/Technicien/technicien-service.service';
import { User } from '../Model/User/user';
import { UserserviceService } from '../Service/UserService/userservice.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {

  Users?: User[];

  // constructor(private technincienService: TechnicienServiceService) { }

  // ngOnInit(): void {

  //   this.technincienService.getTechniciens().subscribe(data => {
  //     console.log(data);
  //   });

  //   this.technincienService.getTechniciens().subscribe(data => {
  //     this.technicien = data;
  //   });
  // }

  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {

    // this.userservice.getUsers().subscribe(data => {
    //   console.log(data);
    // });//////////////////////////////////////////////

    // this.userservice.getUsers().subscribe(data => {
    //   this.Users = data;

    // });

    this.userservice.getUsers().subscribe({
      next: (data) => { this.Users = data; console.log(data) }
    })

  }

}
