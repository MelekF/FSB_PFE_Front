import { Component, OnInit } from '@angular/core';
import { Salle } from '../Model/Salle/salle';
import { SalleserviceService } from '../Service/salleservice/salleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salleens',
  templateUrl: './salleens.component.html',
  styleUrls: ['./salleens.component.css']
})
export class SalleensComponent implements OnInit {

  salle?: Salle[];
  idsalle?: number;
  constructor(private service: SalleserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getSalle();

  }
  getSalle(): void {
    this.service.getSalles().subscribe({
      next: (data) => {
        this.salle = data;
        console.log(data)
      }
    })
  }

}
