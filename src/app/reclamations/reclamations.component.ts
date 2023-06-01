import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../Model/Reclamation/reclamation';
import { ReclamationserviceService } from '../Service/reclamationservice/reclamationservice.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {


  idreclamation?: number;

  reclamation?: Reclamation[];

  constructor(private service: ReclamationserviceService) { }

  ngOnInit(): void {
    this.getreclamation();

    // this.reclamationservice.getReclamations().subscribe({
    //   next: (data) => { this.reclamation = data; console.log(data) }
  }

  //   if (this.reclamationservice != null) {
  //     this.reclamationservice.getReclamations().subscribe({
  //       next: (data) => {
  //         this.reclamation = data;
  //       },
  //       error: (e) => console.error(e)
  //     });
  //   } else {
  //     throw new NullPointerException("ReclamationService is null");
  //   }
  // }


  getreclamation(): void {
    this.service.getReclamations().subscribe({
      next: (data) => {
        this.reclamation = data;
        console.log(data)
      }
    })

  }


  // updatereclamation(idreclamation: number | undefined, reclamation: reclamation) {
  //   this.service.Updatereclamation(idreclamation, reclamation).subscribe(data => {
  //     this.getreclamation()
  //   })

  // }




  // deletereclamation(idreclamation: number | undefined) {
  //   this.service.DeleteReclamation(idreclamation).subscribe(data => {
  //     this.getreclamation()
  //   })

  // }

  deletereclamation(idreclamation: number | undefined) {
    this.service.DeleteReclamation(idreclamation).subscribe({
      next: (data) => {
        console.log(data)
      }
    });

  }






}
