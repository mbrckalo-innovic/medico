import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { DoctorComponent } from './doctor/doctor.component';
import { ListComponent as doctorListComponent } from './doctor/list/list.component';
import { SingleComponent as doctorSingleComponent } from './doctor/single/single.component';
import { FormComponent as doctorFormComponent } from './doctor/form/form.component';

import { PatientComponent } from './patient/patient.component';
import { ListComponent as patientListComponent } from './patient/list/list.component';
import { SingleComponent as patientSingleComponent } from './patient/single/single.component';
import { FormComponent as patientFormComponent } from './patient/form/form.component';

import { BookingComponent } from './booking/booking.component';
import { ListComponent as bookingListComponent } from './booking/list/list.component';
import { FormComponent as bookingFormComponent } from './booking/form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'doctors',
    component: DoctorComponent,
    children: [
      {
        path: '',
        component: doctorListComponent
      },
      {
        path: 'add',
        component: doctorFormComponent
      },
      {
        path: ':id',
        component: doctorSingleComponent
      }
    ]
  },
  {
    path: 'patients',
    component: PatientComponent,
    children: [
      {
        path: '',
        component: patientListComponent
      },
      {
        path: 'add',
        component: patientFormComponent
      },
      {
        path: ':id',
        component: patientSingleComponent
      }
    ]
  },
  {
    path: 'bookings',
    component: BookingComponent,
    children: [
      {
        path: '',
        component: bookingListComponent
      },
      {
        path: 'add',
        component: bookingFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
