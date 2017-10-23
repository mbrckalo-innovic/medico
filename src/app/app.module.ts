import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { DoctorComponent } from './doctor/doctor.component';
import { ListComponent as doctorListComponent } from './doctor/list/list.component';
import { SingleComponent as doctorSingleComponent } from './doctor/single/single.component';
import { FormComponent as doctorFormComponent } from './doctor/form/form.component';
import { DoctorService } from './services/doctor.service';

import { PatientComponent } from './patient/patient.component';
import { ListComponent as patientListComponent } from './patient/list/list.component';
import { SingleComponent as patientSingleComponent } from './patient/single/single.component';
import { FormComponent as patientFormComponent } from './patient/form/form.component';
import { PatientService } from './services/patient.service';

import { BookingComponent } from './booking/booking.component';
import { ListComponent as bookingListComponent } from './booking/list/list.component';
import { FormComponent as bookingFormComponent } from './booking/form/form.component';
import { BookingService } from './services/booking.service';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DoctorComponent,
    doctorListComponent,
    doctorSingleComponent,
    doctorFormComponent,
    PatientComponent,
    patientListComponent,
    patientSingleComponent,
    patientFormComponent,
    BookingComponent,
    bookingListComponent,
    bookingFormComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DoctorService,
    PatientService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
