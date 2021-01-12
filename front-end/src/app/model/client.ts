export class Client {
  id: number;
  fullName: string;
  gender: string;
  age: string;
  phone: string;
  address: string;
  dateCreated: Date;
  dateLastVisit: Date;

  constructor(fullName: string, gender: string, age: string, phone: string, address: string) {
    this.fullName = fullName;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
    this.address = address;
    this.dateLastVisit = new Date();
  }
}
