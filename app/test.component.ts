import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'test',
  templateUrl: `./test.component.html`
})
export class TestComponent {

  constructor(private router: Router) {
    console.log("+++++++++++++++++++++++++ Now I m in test component ++++++++++++++++++++++++");
  }

  goToTest1() {
    this.router.navigate(["/main/1"]);
  }

  goToOthers() {
    this.router.navigate(["/other"]);
  }

  onSearch() {
    console.log("On search button click event");
  }

  searchBarLoaded() {
    console.log("On search bar loaded click event handler");
  }
}