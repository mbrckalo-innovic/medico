import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Patient } from '../../patient/models/patient';
import { PatientService } from '../../services/patient.service';

import { Doctor } from '../../doctor/models/doctor';
import { DoctorService } from '../../services/doctor.service';

let patient_id = 0;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  successMessage: boolean;
  doctors$: Observable<Doctor[]>;
  lockSubmit = false;

  constructor(private patientService: PatientService,
              private doctorService: DoctorService,
              private router: Router) {}

  ngOnInit() {
    this.doctors$ = this.doctorService.getDoctors();
  }

  newPatient(formData) {
    this.lockSubmit = true;

    const p = new Patient(++patient_id,
      formData.value.first_name,
      formData.value.last_name,
      formData.value.gender,
      formData.value.address,
      formData.value.city,
      formData.value.email,
      formData.value.phone,
      formData['value'].selected_doctor);

    if (this.patientService.addPatient(p)) {
      this.successMessage = true;
    }

    setTimeout(() => {
      this.router.navigate(['/patients']);
      this.lockSubmit = false;
    }, 1000);
  }
}
