import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Doctor } from '../../doctor/models/doctor';
import { DoctorService } from '../../services/doctor.service';

import { Patient } from '../models/patient';
import { PatientService } from '../../services/patient.service';

import { Booking } from '../../booking/models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  patient$: Observable<Patient>;
  doctor$: Observable<Doctor>;
  bookings$: Observable<Booking[]>;

  constructor(private patientService: PatientService,
              private doctorService: DoctorService,
              private bookingService: BookingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.patient$ = this.patientService.getPatient(this.route.snapshot.params.id);
    this.patient$.subscribe((data) => {
      this.doctor$ = this.doctorService.getDoctor(data.doctor_id);
      this.bookings$ = this.bookingService.getBookingByPatientId(data.id);
    });
  }
}
