//import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddressComponent } from "./address/address.component";
import { AddressGoalComponent } from "./address-goal/address-goal.component";

const routes: Routes = [
  //{ path: "", redirectTo: "/start", pathMatch: "full" },
  { path: "address", component: AddressComponent },
  { path: "addressGoal", component: AddressGoalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//https://stackblitz.com/edit/angular-tour-of-heroes-example?file=app%2Fapp-routing.module.ts
