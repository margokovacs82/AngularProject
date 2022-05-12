export class Address {
  id: number;
  name: string;
  name2: string;
  city: string;
  street1: string;
  street2: string;
  phone: number;

  constructor(
    id: number,
    name: string,
    name2: string,
    city: string,
    street1: string,
    street2: string,
    phone: number
  ) {
    this.id = id;
    this.name = name;
    this.name2 = name2;
    this.city = city;
    this.street1 = street1;
    this.street2 = street2;
    this.phone = phone;
  }

  static getEmpty() {
    return new Address(null, "", "", "", "", "", null);
  }
}
