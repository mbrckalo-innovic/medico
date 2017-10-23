export class Patient {

  constructor(public id: number,
              public first_name: string,
              public last_name: string,
              public gender: string,
              public address: string,
              public city: string,
              public email: string,
              public phone: string,
              public doctor_id: number) {}
}
