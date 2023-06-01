import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User/user';
import { UserserviceService } from '../Service/UserService/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // user: User;

  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {
    // this.userservice.getUsers().subscribe(data => {
    //   this.user = data;
    // });
  }

}


