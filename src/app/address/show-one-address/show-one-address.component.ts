import { Component, OnInit } from "@angular/core";
import { AddressService, Address } from "../../core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Subject } from "rxjs";
import { Subscription } from "rxjs";

import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-show-one-address",
  templateUrl: "./show-one-address.component.html",
  styleUrls: ["./show-one-address.component.scss"],
})
export class ShowOneAddressComponent implements OnInit {
  AllTheAddresses: Address[];
  oneAddress: Address;
  newAddress: Subscription;

  constructor(
    private addressService: AddressService,
    private location: Location
  ) {}

  ngOnInit() {
    this.addressService.getAddresses().subscribe((res) => {
      this.AllTheAddresses = res;
    });
    // új address adatainak kinyerése
    this.newAddress = this.addressService.isAddressListUpdated$
      .pipe()
      .subscribe((res) => {
        this.oneAddress = res;
        console.log("i have the response", res);
        this.addressService
          .addOnlyOneAddress(this.oneAddress)
          .subscribe((value) => {
            this.AllTheAddresses.push(value);
          });
      });
  }
  //TODO: MEGJELENÍTENI A HTML-BEN AZ EGÉSZET
  ngOnDestroy(): void {
    this.newAddress.unsubscribe();
  }
}
