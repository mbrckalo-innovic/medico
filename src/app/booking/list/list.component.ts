import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Booking } from '../models/booking';
import { BookingService } from '../../services/booking.service';

import { Doctor } from '../../doctor/models/doctor';
import { DoctorService } from '../../services/doctor.service';

import { Patient } from '../../patient/models/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  doctors$: Observable<Doctor[]>;
  patients$: Observable<Patient[]>;
  newer = true;

  constructor(private bookingService: BookingService,
              private doctorService: DoctorService,
              private patientService: PatientService) {}

  ngOnInit() {
    this.bookings$ = this.bookingService.getAll();
    this.doctors$ = this.doctorService.getDoctors();
    this.patients$ = this.patientService.getPatients();
  }

  byOlder() {
    this.newer = false;
  }

  byNewer() {
    this.newer = true;
  }
}
