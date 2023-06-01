import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { MembresComponent } from './membres/membres.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardadministrateurComponent } from './dashboardadministrateur/dashboardadministrateur.component';
import { DashboardenseignantComponent } from './dashboardenseignant/dashboardenseignant.component';
import { ProfileComponent } from './profile/profile.component';
import { AddreservationComponent } from './addreservation/addreservation.component';
import { FormsModule } from '@angular/forms';
import { TryComponent } from './try/try.component';
import { UpdatereservationComponent } from './updatereservation/updatereservation.component';
import { SalleComponent } from './salle/salle.component';
import { MembresadminComponent } from './membresadmin/membresadmin.component';
import { SalleadminComponent } from './salleadmin/salleadmin.component';
import { SalleensComponent } from './salleens/salleens.component';
import { ReclamationensComponent } from './reclamationens/reclamationens.component';
import { ReservationensComponent } from './reservationens/reservationens.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EquipementsComponent,
    MembresComponent,
    ReclamationsComponent,
    ReservationComponent,
    HeaderComponent,
    DashboardadministrateurComponent,
    DashboardenseignantComponent,
    ProfileComponent,
    AddreservationComponent,
    TryComponent,
    UpdatereservationComponent,
    SalleComponent,
    MembresadminComponent,
    SalleadminComponent,
    SalleensComponent,
    ReclamationensComponent,
    ReservationensComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
