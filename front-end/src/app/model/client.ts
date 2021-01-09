export class Client {
  id: number;
  name: string;
  gender: string;
  age: string;
  phone: string;
  address: string;
  created: Date;
  lastVisit: Date;


  constructor(id: number, name: string, gender: string, age: string, phone: string, address: string, created: Date, lastVisit: Date) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
    this.address = address;
    this.created = created;
    this.lastVisit = lastVisit;
  }
}
