import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { Doctor } from '../doctor/models/doctor';

@Injectable()
export class DoctorService {
  private doctors: Array<Doctor> = [];

  constructor() {}

  getDoctor(id: number) {
    const index = this.doctors.findIndex((item) => item.id === Number(id));

    return Observable.of(((index >= 0) ? this.doctors[index] : {}));
  }

  getDoctors() {
    return Observable.of(this.doctors);
  }

  addDoctor(doctor: Doctor) {
    return !!(this.doctors.push(doctor));
  }

  total() {
    return this.doctors.length;
  }
}
