//import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddressComponent } from "./address/address.component";
import { AddressGoalComponent } from "./address-goal/address-goal.component";
import { RandomImagesComponent } from "./random-images/random-images.component";

const routes: Routes = [
  // { path: "", redirectTo: "/start", pathMatch: "full" },
  { path: "address", component: AddressComponent },
  { path: "addressGoal", component: AddressGoalComponent },
  { path: "back", component: RandomImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//https://stackblitz.com/edit/angular-tour-of-heroes-example?file=app%2Fapp-routing.module.ts
