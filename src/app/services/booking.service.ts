import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Booking } from '../booking/models/booking';

@Injectable()
export class BookingService {
  private bookings: Array<Booking> = [];

  constructor() {}

  getAll() {
    return Observable.of(this.bookings);
  }

  getBookingsByDoctorId(id: number) {
    const bookingsByDoctor = this.bookings.filter((booking) => {
      return booking.doctor_id === id;
    });

    return Observable.of(bookingsByDoctor);
  }

  getBookingByPatientId(id: number) {
    const bookingsByPatient = this.bookings.filter((booking) => {
      return booking.patient_id === id;
    });

    return Observable.of(bookingsByPatient);
  }

  addBooking(booking: Booking) {
    return !!(this.bookings.push(booking));
  }

  total() {
    return this.bookings.length;
  }
}
