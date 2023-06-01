export class Reservation {
    idreservation?: number;
    reservationnom?: String;
    reservationtel?: String;
    reservationemail?: String;
    reservationncin?: String;
    reservationtype?: String;
    reservationsalle?: String;
    reservationemateriel?: String;
    reservationdate?: String;
    reservationheure?: String;


    constructor(idreservation?: number, reservationnom?: String, reservationtel?: String, reservationemail?: String, reservationncin?: String,
        reservationtype?: String, reservationsalle?: String, reservationemateriel?: String, reservationdate?: String, reservationheure?: String,) {
        this.idreservation = this.idreservation || 0;
        this.reservationnom = this.reservationnom || '';
        this.reservationtel = this.reservationtel || '';
        this.reservationemail = this.reservationemail || '';
        this.reservationncin = this.reservationncin || '';
        this.reservationtype = this.reservationtype || '';
        this.reservationsalle = this.reservationsalle || '';
        this.reservationemateriel = this.reservationemateriel || '';
        this.reservationdate = this.reservationdate || '';
        this.reservationheure = this.reservationheure || '';
    }

}
