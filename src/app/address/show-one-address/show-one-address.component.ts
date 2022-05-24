import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
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

  @Input()
  isShown: boolean = false;

  @Input()
  newAddressForm: FormGroup;

  constructor(
    private addressService: AddressService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildFrom();
    console.log(this.isShown);

    this.addressService.getAddresses().subscribe((res) => {
      this.AllTheAddresses = res;
    });
    // új address adatainak kinyerése
    this.newAddress = this.addressService.isAddressListUpdated$
      .pipe()
      .subscribe((res) => {
        this.oneAddress = res;
        this.getDataInTheForm();
        console.log("i have the response", res);

        this.addressService
          .addOnlyOneAddress(this.oneAddress)
          .subscribe((value) => {
            this.AllTheAddresses.push(value);
          });
      });
    //}
  }

  buildFrom() {
    //TODO: kötelező mezők validálás
    this.newAddressForm = this.formBuilder.group({
      lastName: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      firstname: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      city: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      address1: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      address2: ["", [Validators.pattern(/^[a-zA-ZöüóőúéáűíÖÜÓŐÚÉÁŰÍ. -]*$/)]],
      telnumber: [],
    });
    this.newAddressForm.get("lastName").disable();
    this.newAddressForm.get("firstname").disable();
    this.newAddressForm.get("city").disable();
    this.newAddressForm.get("address1").disable();
    this.newAddressForm.get("address2").disable();
    this.newAddressForm.get("telnumber").disable();
  }

  getDataInTheForm() {
    if (this.oneAddress) {
      this.newAddressForm.get("lastName").setValue(this.oneAddress.name);
      this.newAddressForm.get("firstname").setValue(this.oneAddress.name2);
      this.newAddressForm.get("city").setValue(this.oneAddress.city);
      this.newAddressForm.get("address1").setValue(this.oneAddress.street1);
      this.newAddressForm.get("address2").setValue(this.oneAddress.street2);
      this.newAddressForm.get("telnumber").setValue(this.oneAddress.phone);
    }
  }

  ngOnDestroy(): void {
    this.newAddress.unsubscribe();
  }
}
