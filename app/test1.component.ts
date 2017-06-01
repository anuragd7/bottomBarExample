import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'xyz',
    templateUrl: `./test1.component.html`
})
export class XyzComponent {

    constructor(private router: Router) {
        console.log("*********************** Now I am in test1 component *********************");
    }

    goToTest() {
        this.router.navigate(["/main/0"]);
    }
}