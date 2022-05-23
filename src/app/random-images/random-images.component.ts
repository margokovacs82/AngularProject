import { Component, OnInit } from "@angular/core";
import { AddressComponent } from "../address/address.component";

@Component({
  selector: "app-random-images",
  templateUrl: "./random-images.component.html",
  styleUrls: ["./random-images.component.scss"],
})
export class RandomImagesComponent implements OnInit {
  constructor(private addressComponent: AddressComponent) {}

  ngOnInit() {
    this.imgRandom();
  }

  imgRandom() {
    var image = document.createElement("img");
    var imageParent = document.getElementById("img");
    image.id = "Id";
    image.className = "class";

    let imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    let basePath = "assets/";
    for (var i = 0; i < imgArray.length; i++) {
      var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
      console.log(rand);
      var image = new Image();
      image.src = basePath + rand;
    }
    imageParent.appendChild(image);
  }
}
