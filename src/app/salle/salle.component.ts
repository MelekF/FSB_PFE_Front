import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalleserviceService } from '../Service/salleservice/salleservice.service';
import { Salle } from '../Model/Salle/salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
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
