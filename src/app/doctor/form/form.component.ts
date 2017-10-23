import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Doctor } from '../models/doctor';
import { DoctorService } from '../../services/doctor.service';

let doctor_id = 0;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  successMessage: boolean;
  lockSubmit = false;

  constructor(private doctorService: DoctorService,
              private router: Router) {}

  ngOnInit() {}

  newDoctor(formData) {
    this.lockSubmit = true;

    const d = new Doctor(++doctor_id,
      formData.value.first_name,
      formData.value.last_name,
      formData.value.gender,
      formData.value.email,
      formData.value.specialization);

    if (this.doctorService.addDoctor(d)) {
      this.successMessage = true;
    }

    setTimeout(() => {
      this.router.navigate(['/doctors']);
      this.lockSubmit = false;
    }, 1000);
  }
}
