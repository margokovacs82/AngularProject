import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
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
import { Injectable } from "@angular/core";
import { Address, AddressService } from "../core";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  addressToSend: Address;
  AllTheAddresse: Address[] = [];

  @Input()
  addressForm: FormGroup;

  @Input()
  Address: Address;

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private addressGoalComponent: AddressGoalComponent
  ) {}

  get lastName(): FormControl {
    return this.addressForm.get("lastName") as FormControl;
  }
  get firstname(): FormControl {
    return this.addressForm.get("firstname") as FormControl;
  }
  get city(): FormControl {
    return this.addressForm.get("city") as FormControl;
  }
  get address1(): FormControl {
    return this.addressForm.get("address1") as FormControl;
  }
  get address2(): FormControl {
    return this.addressForm.get("address2") as FormControl;
  }
  get telnumber(): FormControl {
    return this.addressForm.get("telnumber") as FormControl;
  }

  ngOnInit() {
    this.buildFrom();
  }

  buildFrom() {
    //todo: kötelező mezők validálás
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

      this.addressService.announceselectedAddress(
        new Address(
          newAddressToSend.id,
          newAddressToSend.name,
          newAddressToSend.name2,
          newAddressToSend.city,
          newAddressToSend.street1,
          newAddressToSend.street2,
          newAddressToSend.phone
        )
      );
    }
  }

  // static createForm(): FormGroup {
  //   return new FormGroup({
  //     lastName: new FormControl({ value: "" }),
  //     firstname: new FormControl({ value: "" }),
  //     city: new FormControl({ value: "" }),
  //     address1: new FormControl({ value: "" }),
  //     address2: new FormControl({ value: "" }),
  //     telnumber: new FormControl({ value: null }),
  //   });
  // }
}
