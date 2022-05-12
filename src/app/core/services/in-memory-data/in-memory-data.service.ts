import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Address } from "../../models/address/address.model";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const addresses = [
      {
        id: 0,
        name: "Zero",
        name2: "Zeno",
        city: "Budapest",
        street1: "bölöni",
        street2: "györgy",
        phone: "062053069",
      },
      {
        id: 1,
        name: "Zora",
        name2: "Tia",
        city: "Szeged",
        street1: "gyuri",
        street2: "istván",
        phone: "062053069",
      },
      {
        id: 2,
        name: "Narco",
        name2: "Mia",
        city: "Göd",
        street1: "agar",
        street2: "lala",
        phone: "062053069",
      },
      {
        id: 3,
        name: "RubberMan",
        name2: "Ria",
        city: "Eger",
        street1: "resti",
        street2: "oral",
        phone: "062053069",
      },
      {
        id: 4,
        name: "Magma",
        name2: "Gia",
        city: "Buda",
        street1: "loli",
        street2: "ük",
        phone: "062053069",
      },
      {
        id: 5,
        name: "Tornado",
        name2: "Pia",
        city: "Telki",
        street1: "korall",
        street2: "györgy",
        phone: "062053069",
      },
      {
        id: 6,
        name: "Celeritas",
        name2: "Lia",
        city: "Budapest",
        street1: "lépö",
        street2: "para",
        phone: "062053069",
      },
    ];
    return { addresses };
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(addresses: Address[]): number {
    return addresses.length > 0
      ? Math.max(...addresses.map((address) => address.id)) + 1
      : 11;
  }
}
