/*import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
} */


import { Component, OnInit, OnDestroy } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';

import { RouterExtensions } from "nativescript-angular";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

registerElement('BottomBar', () => BottomBar);

@Component({
    selector: "nsapp",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit, OnDestroy {
    public hidden: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;
    public textToNumber: number;
    private routerSubscriber: Subscription;

    public items: Array<BottomBarItem> = [
        new BottomBarItem(0, "Home", "pin", "black", new Notification("blue", "white", "1")),
        new BottomBarItem(1, "Calendar", "student", "#1083BF", new Notification("green", "blue", "1")),
        new BottomBarItem(2, "Profile", "briefcase", "pink", new Notification("pink", "yellow", "1")),
        new BottomBarItem(3, "Message", "book", "green", new Notification("green", "red", "1"))
    ];

    constructor(private router: Router) {

    }


    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.routerSubscriber = this.router.events.subscribe((value) => {
            console.log(value);
            // if (this.router.isActive("/main", false)) {
            if (value.url.indexOf("/main") !== -1) {
                console.log("In maintab view Subscribed to the router and now in main root");
                const getTabFromUrl = value.url.charAt(value.url.length - 1);
                this.textToNumber = parseInt(getTabFromUrl);
                //this.textToNumber = +getTabFromUrl;
                console.log("Checking wheather parseint is working or not" + this.textToNumber);
                this.setActiveTabFromUrlChange();
            }
        });
    }


    ngOnDestroy() {
        this.routerSubscriber.unsubscribe();
    }

    tabLoaded(event) {
        this._bar = <BottomBar>event.object;
        this.hidden = false;
        this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
        this.inactiveColor = "white";
        this.accentColor = "blue";
    }

    tabSelected(args: SelectedIndexChangedEventData) {
        // only triggered when a different tab is tapped
        console.log(args.newIndex);
        const routeParameterIndex = args.newIndex.toString();
        this.router.navigate(["/main/" + routeParameterIndex]);
    }


    /**
     * setActiveTabFromUrlChange
     * Sets the current tab by getting the information from url.
     */
    public setActiveTabFromUrlChange() {
        console.log("The tab selected from url is " + this.textToNumber);

        //Not being able to call the selectItem funtion. typescript is giving the following error
        //app/app.component.ts(104,19): error TS2339: Property 'selectItem' does not exist on type 'BottomBar'.
        this._bar.selectItem(this.textToNumber);
    }
}    