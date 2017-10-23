import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalDoctors: number;
  totalPatients: number;
  totalBookings: number;

  constructor(private doctorService: DoctorService,
              private patientService: PatientService,
              private bookingService: BookingService) {}

  ngOnInit() {
    this.totalDoctors = this.doctorService.total();
    this.totalPatients = this.patientService.total();
    this.totalBookings = this.bookingService.total();
  }
}
