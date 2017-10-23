import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Patient } from '../models/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  patients$: Observable<Patient[]>;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patients$ = this.patientService.getPatients();
  }
}
