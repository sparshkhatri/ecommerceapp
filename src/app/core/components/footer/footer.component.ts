import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  route = "";
  isCartPage = false;
  constructor(private location: Location) { }

  ngOnInit() {
    this.route = this.location.path();
    if (this.route === 'shopping-cart') {
      this.isCartPage = true;
    } 
  }

}
