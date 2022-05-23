import { Component, OnInit } from "@angular/core";
import { AddressService, Address } from "../core";
import { AddressComponent } from "../address/address.component";

import { Observable } from "rxjs";
import { Subscription } from "rxjs";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-address-goal",
  templateUrl: "./address-goal.component.html",
  styleUrls: ["./address-goal.component.scss"],
})
export class AddressGoalComponent implements OnInit {
  addressGoalForm: FormGroup;
  AllTheAddresses: Address[];
  oneAddress: Address;

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder //private addressComponent: AddressComponent
  ) {}

  ngOnInit() {
    this.buildFrom();

    this.addressService.getAddresses().subscribe((res) => {
      this.AllTheAddresses = res;
      console.log(res);

      for (let i = 0; i < this.AllTheAddresses.length; i++) {
        (this.addressGoalForm.controls["list"] as FormArray).push(
          this.createRow()
        );
        this.getDataInTheForm(i);
      }
    });
    // address adatainak kinyerése
    // this.addressService.isAddressListUpdated$.pipe().subscribe((res) => {
    //   this.oneAddress = res;
    //   console.log("i have the response", res);
    //   this.addressService.addOneAddress(this.oneAddress).subscribe((value) => {
    //     console.log(value);
    //     this.AllTheAddresses.push(value);
    //   });
    //   //todo: táblázatba betöltés
    //   //todo: kétszer küldi valamiért
    // });
  }

  buildFrom() {
    this.addressGoalForm = this.formBuilder.group({
      list: this.formBuilder.array([]),
    });
  }

  createRow() {
    return this.formBuilder.group({
      lastName: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      firstName: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      city: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      address1: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      address2: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      telnumber: ["", Validators.pattern(/^[0-9]{10-11}$/)],
    });
  }

  getDataInTheForm(rowIndex: number) {
    const rowString = JSON.stringify(rowIndex);
    this.addressGoalForm
      .get("list")
      .get(rowString)
      .get("lastName")
      .setValue(this.AllTheAddresses[rowIndex].name);

    this.addressGoalForm
      .get("list")
      .get(rowString)
      .get("firstName")
      .setValue(this.AllTheAddresses[rowIndex].name2);

    this.addressGoalForm
      .get("list")
      .get(rowString)
      .get("city")
      .setValue(this.AllTheAddresses[rowIndex].city);

    this.addressGoalForm
      .get("list")
      .get(rowString)
      .get("address1")
      .setValue(this.AllTheAddresses[rowIndex].street1);

    this.addressGoalForm
      .get("list")
      .get(rowString)
      .get("address2")
      .setValue(this.AllTheAddresses[rowIndex].street2);

    this.addressGoalForm
      .get("list")
      .get(rowString)
      .get("telnumber")
      .setValue(this.AllTheAddresses[rowIndex].phone);
  }
}
