import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
import { DashboardadministrateurComponent } from './dashboardadministrateur/dashboardadministrateur.component';
import { DashboardenseignantComponent } from './dashboardenseignant/dashboardenseignant.component';
import { ProfileComponent } from './profile/profile.component';
import { MembresComponent } from './membres/membres.component';
import { AddreservationComponent } from './addreservation/addreservation.component';
import { TryComponent } from './try/try.component';
import { UpdatereservationComponent } from './updatereservation/updatereservation.component';
import { Salle } from './Model/Salle/salle';
import { SalleComponent } from './salle/salle.component';
import { MembresadminComponent } from './membresadmin/membresadmin.component';
import { SalleadminComponent } from './salleadmin/salleadmin.component';
import { SalleensComponent } from './salleens/salleens.component';
import { ReclamationensComponent } from './reclamationens/reclamationens.component';
import { ReservationensComponent } from './reservationens/reservationens.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'Dashboardadministrateur', component: DashboardadministrateurComponent },
  { path: 'Dashboardenseignant', component: DashboardenseignantComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'equipement', component: EquipementsComponent },
  { path: 'membres', component: MembresComponent },
  { path: 'Reclamations', component: ReclamationsComponent },
  { path: 'Reservation', component: ReservationComponent },
  { path: 'Addreservation', component: AddreservationComponent },
  { path: 'tr', component: TryComponent },
  { path: 'updatereservation/:idreservation', component: UpdatereservationComponent },
  { path: 'Salle', component: SalleComponent },
  { path: 'membreadmin', component: MembresadminComponent },
  { path: 'salleadmin', component: SalleadminComponent },
  { path: 'sallesenseignant', component: SalleensComponent },
  { path: 'reclamationenseignant', component: ReclamationensComponent },
  { path: 'reservationenseignant', component: ReservationensComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
