import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

import { Doctor } from '../../doctor/models/doctor';
import { DoctorService } from '../../services/doctor.service';

import { BookingService } from '../../services/booking.service';
import { Booking } from '../models/booking';

import { PatientService } from '../../services/patient.service';
import { Patient } from '../../patient/models/patient';

let booking_id = 0;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  successMessage: boolean;
  doctors$: Observable<Doctor[]>;
  patients$: Observable<Patient[]>;
  lockSubmit = false;
  searchingType$ = new Subject();
  doctorId: number;

  constructor(private bookingService: BookingService,
              private doctorService: DoctorService,
              private patientService: PatientService,
              private router: Router) {}

  ngOnInit() {
    this.doctors$ = this.doctorService.getDoctors();
    this.searchingType$
      .debounceTime(300)
      .subscribe((data) => {
        this.patients$ = this.patientService.getPatientByName(data, this.doctorId);
    });
  }

  onType(data, id) {
    this.doctorId = id;
    this.searchingType$.next(data);
  }

  newBooking(formData) {
    this.lockSubmit = true;
    const doctorName = this.doctorService.getDoctor(Number(formData.value.selected_doctor));
    const patientName = this.patientService.getPatient(Number(formData.value.selected_patient));

    const b = new Booking(++booking_id,
      Number(formData.value.selected_doctor),
      `${doctorName['value'].first_name} ${doctorName['value'].last_name}`,
      Number(formData.value.selected_patient),
      `${patientName['value'].first_name} ${patientName['value'].last_name}`,
      formData.value.date,
      formData.value.time,
      formData.value.description);

    if (this.bookingService.addBooking(b)) {
      this.successMessage = true;
    }

    setTimeout(() => {
      this.router.navigate(['/bookings']);
      this.lockSubmit = false;
    }, 1000);
  }
}
