import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { Patient } from '../patient/models/patient';

@Injectable()
export class PatientService {
  private patients: Array<Patient> = [];

  constructor() {}

  getPatients() {
    return Observable.of(this.patients);
  }

  getPatient(id: number) {
    const index = this.patients.findIndex((item) => item.id === Number(id));
    return Observable.of(((index >= 0) ? this.patients[index] : {}));
  }

  getPatientByName(name, doctorId) {
    if (!name) {
      return Observable.of([]);
    }

    const somePatients = this.patients.filter((patient) => {
      return patient.doctor_id === doctorId;
    });

    const result = somePatients.filter((patient) => {
      return `${patient.first_name.toLowerCase()} ${patient.last_name.toLowerCase()}`.search(new RegExp(name, 'ig')) >= 0;
    });

    return Observable.of(result);
  }

  getPatientsByDoctorId(id: number) {
    const patientsByDoctor = this.patients.filter((patient) => {
      return patient.doctor_id === id;
    });

    return Observable.of(patientsByDoctor);
  }

  addPatient(patient: Patient) {
    return !!(this.patients.push(patient));
  }

  total() {
    return this.patients.length;
  }
}
