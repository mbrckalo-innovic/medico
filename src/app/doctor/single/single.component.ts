import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Doctor } from '../models/doctor';
import { DoctorService } from '../../services/doctor.service';

import { Patient } from '../../patient/models/patient';
import { PatientService } from '../../services/patient.service';

import { Booking } from '../../booking/models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  doctor$: Observable<Doctor>;
  patients$: Observable<Patient[]>;
  bookings$: Observable<Booking[]>;
  id: number;

  constructor(private doctorService: DoctorService,
              private patientService: PatientService,
              private bookingService: BookingService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.doctor$ = this.doctorService.getDoctor(this.id);
    this.doctor$.subscribe((data) => {
      this.bookings$ = this.bookingService.getBookingsByDoctorId(data.id);
      this.patients$ = this.patientService.getPatientsByDoctorId(this.id);
    });
  }
}
