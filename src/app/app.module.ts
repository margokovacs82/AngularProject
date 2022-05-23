import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { InMemoryDataService } from "./core/services/in-memory-data/in-memory-data.service";
import { NgModule } from "@angular/core";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
} from "@angular/material";

import { AppComponent } from "./app.component";
import { AddressComponent } from "./address/address.component";
import { ButtonComponent } from "./button/button.component";
import { AddressGoalComponent } from "./address-goal/address-goal.component";
import { AddressService } from "./core/services/address/address.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShowOneAddressComponent } from "./address/show-one-address/show-one-address.component";
import { RandomImagesComponent } from "./random-images/random-images.component";

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    ButtonComponent,
    AddressGoalComponent,
    ShowOneAddressComponent,
    RandomImagesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //  InMemoryWebApiModule.forRoot(InMemoryDataService, {
    //    passThruUnknownUrl: true,
    //  }), // fake in memory API simulation
  ],
  providers: [AddressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
