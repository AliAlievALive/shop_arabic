export class Client {
  id: number;
  fullName: string;
  gender: string;
  age: string;
  phone: string;
  address: string;
  dateCreated: Date;
  dateLastVisit: Date;

  constructor(id: number, fullName: string, gender: string, age: string, phone: string, address: string, created: Date, lastVisit: Date) {
    this.id = id;
    this.fullName = fullName;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
    this.address = address;
    this.dateCreated = created;
    this.dateLastVisit = lastVisit;
  }
}
