import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AddressService } from "../address.service";
import { AddressGoalComponent } from "../address-goal/address-goal.component";

import { Observable } from "rxjs";
import { Subscription } from "rxjs";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Address } from "../address";

import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;
  dataToSend: Subscription;
  addressToSend: Address;
  AllTheAddresses;

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private addressGoalComponent: AddressGoalComponent
  ) {}

  // obs = new Observable((observer) => {
  //   console.log("Observable starts");
  //   observer.next("1");
  //   observer.next("2");
  //   observer.next("3");
  //   observer.next("4");
  //   observer.next("5");
  // });

  // data: Subscription;

  ngOnInit() {
    this.buildFrom();

    this.addressService.getAddresses().subscribe((res) => {
      this.AllTheAddresses = res;
      console.log(res);
    });
    // this.obs.subscribe(
    //   (val) => {
    //     console.log(val);
    //   }, //next callback
    //   (error) => {
    //     console.log("error");
    //   }, //error callback
    //   () => {
    //     console.log("Completed");
    //   } //complete callback
    // );

    // this.data = this.obs.subscribe((value) => {
    //   console.log("Received ");
    // });
  }

  buildFrom() {
    this.addressForm = this.formBuilder.group({
      lastName: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      firstname: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      city: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      address1: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      address2: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      telnumber: [],
    });
  }

  addOneAddress() {
    console.log(this.addressForm.value);
    let newAddressToSend = Address.getEmpty();

    console.log(newAddressToSend);

    if (this.addressForm.invalid) {
      return;
    } else {
      newAddressToSend.name = this.addressForm.get("lastName").value;
      newAddressToSend.name2 = this.addressForm.get("firstname").value;
      newAddressToSend.city = this.addressForm.get("city").value;
      newAddressToSend.street1 = this.addressForm.get("address1").value;
      newAddressToSend.street2 = this.addressForm.get("address2").value;
      newAddressToSend.phone = this.addressForm.get("telnumber").value;
      console.log(newAddressToSend);
      this.addressService.addOneAddress(newAddressToSend).subscribe((value) => {
        this.AllTheAddresses.push(value);
      });
    }
  }

  // ngOnDestroy() {
  //   this.data.unsubscribe();
  // }
}
