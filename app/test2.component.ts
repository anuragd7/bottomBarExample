import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'pqr',
    templateUrl: `./test2.component.html`
})
export class PqrComponent {

    constructor(private router: Router) {
        console.log("*********************** Now I am in test-2 component *********************");
    }

    goToTest() {
        this.router.navigate(["/main/0"]);
    }

    goToTest1() {
        this.router.navigate(["/main/1"]);
    }
}