import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../Model/Reclamation/reclamation';
import { ReclamationserviceService } from '../Service/reclamationservice/reclamationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamationens',
  templateUrl: './reclamationens.component.html',
  styleUrls: ['./reclamationens.component.css']
})
export class ReclamationensComponent implements OnInit {


  // reclamation: Reclamation = new Reclamation;
  reclamation: Reclamation = new Reclamation;
  constructor(private service: ReclamationserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  addReclamation() {
    this.service.CreateReclamation(this.reclamation)

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
    this.addReclamation();
  }



}
