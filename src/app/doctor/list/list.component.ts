import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Doctor } from '../models/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  doctors$: Observable<Doctor[]>;

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.doctors$ = this.doctorService.getDoctors();
  }
}
