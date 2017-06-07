import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'abc',
  templateUrl: `./test.component.html`
})
export class AbcComponent {

  constructor(private router: Router) {
    console.log("+++++++++++++++++++++++++ Now I m in test component ++++++++++++++++++++++++");
  }

  goToTest1() {
    this.router.navigate(["/main/1"]);
  }

  goToOthers() {
    this.router.navigate(["/other"]);
  }
}