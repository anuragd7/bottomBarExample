import { Component } from "@angular/core";
// import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: "my-app",
    templateUrl: "mains.component.html",
})
export class MainsComponent {
    constructor() {
        console.log("I am in the constructor of Mains Component");
    }
}
