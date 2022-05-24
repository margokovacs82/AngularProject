import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-random-images",
  templateUrl: "./random-images.component.html",
  styleUrls: ["./random-images.component.scss"],
})
export class RandomImagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.imgRandom();
  }

  imgRandom() {
    let image = document.createElement("img");
    let imageParent = document.getElementById("img");

    let imgArray = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpeg",
      "8.jpg",
    ];
    let basePath = "assets/";
    let rand = imgArray[Math.floor(Math.random() * imgArray.length)];
    console.log(rand);
    image.src = basePath + rand;

    imageParent.appendChild(image);
  }
}
