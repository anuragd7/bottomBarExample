import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'test1',
    templateUrl: `./test1.component.html`
})
export class Test1Component {

    constructor(private router: Router) {
        console.log("*********************** Now I am in test1 component *********************");
    }

    goToTest() {
        this.router.navigate(["/main/0"]);
    }

    goToOthers() {
        this.router.navigate(["/other"]);
    }
}