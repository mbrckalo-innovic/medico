export class Booking {

  constructor(public id: number,
              public doctor_id: number,
              public doctor_name: string,
              public patient_id: number,
              public patient_name: string,
              public date: string,
              public time: string,
              public description?: string) {}
}
