import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'test2',
    templateUrl: `./test2.component.html`
})
export class Test2Component {

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