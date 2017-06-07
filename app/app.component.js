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
"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require('nativescript-angular');
var nativescript_bottombar_1 = require('nativescript-bottombar');
var router_1 = require("@angular/router");
nativescript_angular_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.items = [
            new nativescript_bottombar_1.BottomBarItem(0, "Home", "pin", "black", new nativescript_bottombar_1.Notification("blue", "white", "1")),
            new nativescript_bottombar_1.BottomBarItem(1, "Calendar", "student", "#1083BF", new nativescript_bottombar_1.Notification("green", "blue", "1")),
            new nativescript_bottombar_1.BottomBarItem(2, "Profile", "briefcase", "pink", new nativescript_bottombar_1.Notification("pink", "yellow", "1")),
            new nativescript_bottombar_1.BottomBarItem(3, "Message", "book", "green", new nativescript_bottombar_1.Notification("green", "red", "1"))
        ];
        this.selected = 0;
    }
    // ngOnInit() {
    //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //     //Add 'implements OnInit' to the class.
    //     this.routerSubscriber = this.router.events.subscribe((value) => {
    //         console.log(value);
    //         // if (this.router.isActive("/main", false)) {
    //         if (value.url.indexOf("/main") !== -1) {
    //             console.log("In maintab view Subscribed to the router and now in main root");
    //             const getTabFromUrl = value.url.charAt(value.url.length - 1);
    //             this.textToNumber = parseInt(getTabFromUrl);
    //             //this.textToNumber = +getTabFromUrl;
    //             console.log("Checking wheather parseint is working or not" + this.textToNumber);
    //             this.setActiveTabFromUrlChange();
    //         }
    //     });
    // }
    AppComponent.prototype.ngOnInit = function () {
        console.log("++++++++++++++++++ In On Init Of app Component *******************");
        var currentRouterUrl = this.router.url;
        if (currentRouterUrl.indexOf("/main") !== -1) {
            console.log("In app view Subscribed to the router and now in main root");
            var getTabFromUrl = currentRouterUrl.charAt(currentRouterUrl.length - 1);
            this.currentTabNumberToBeSelected = parseInt(getTabFromUrl);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        //this.routerSubscriber.unsubscribe();
    };
    AppComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this.hidden = false;
        this.titleState = 0 /* SHOW_WHEN_ACTIVE */;
        this.inactiveColor = "white";
        this.accentColor = "blue";
        console.log("&&&&&&&&&& In Bottombar the tab loded is fired &&&&&&&&&&");
        this.setActiveTabFromUrlChange();
    };
    AppComponent.prototype.tabSelected = function (args) {
        // only triggered when a different tab is tapped
        console.log("&&&&&&&&&& In Bottombar the tab is selected from UI &&&&&&&&&&");
        console.log("The new tab selected is " + args.newIndex);
        var routeParameterIndex = args.newIndex.toString();
        this.router.navigate(["/main/" + routeParameterIndex]);
    };
    /**
     * setActiveTabFromUrlChange
     * Sets the current tab by getting the information from url.
     */
    AppComponent.prototype.setActiveTabFromUrlChange = function () {
        console.log("&&&&&&&&&& The tab selected from url change &&&&&&&&&&");
        if (this.currentTabNumberToBeSelected !== null) {
            this._bar.selectItem(this.currentTabNumberToBeSelected);
            this.selected = this.currentTabNumberToBeSelected;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "nsapp",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJOztBQUdKLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxxQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN2RCx1Q0FBbUcsd0JBQXdCLENBQUMsQ0FBQTtBQUc1SCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QyxzQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsa0NBQVMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQU85QztJQWtCSSxzQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUM0IsVUFBSyxHQUF5QjtZQUNqQyxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUkscUNBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxxQ0FBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUYsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLHFDQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3RixJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUkscUNBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFGLENBQUM7UUFFRixhQUFRLEdBQVcsQ0FBQyxDQUFDO0lBSXJCLENBQUM7SUFHRCxlQUFlO0lBQ2Ysd0dBQXdHO0lBQ3hHLDhDQUE4QztJQUM5Qyx3RUFBd0U7SUFDeEUsOEJBQThCO0lBQzlCLHlEQUF5RDtJQUN6RCxtREFBbUQ7SUFDbkQsNEZBQTRGO0lBQzVGLDRFQUE0RTtJQUM1RSwyREFBMkQ7SUFDM0Qsb0RBQW9EO0lBQ3BELCtGQUErRjtJQUMvRixnREFBZ0Q7SUFDaEQsWUFBWTtJQUNaLFVBQVU7SUFDVixJQUFJO0lBSUosK0JBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUNsRixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1lBQ3pFLElBQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLDRCQUE0QixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoRSxDQUFDO0lBQ0wsQ0FBQztJQUdELGtDQUFXLEdBQVg7UUFDSSxzQ0FBc0M7SUFDMUMsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBYyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsd0JBQTRCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksSUFBbUM7UUFDM0MsZ0RBQWdEO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHRDs7O09BR0c7SUFDSSxnREFBeUIsR0FBaEM7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7UUFDdEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUE0QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUE1Rkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDOztvQkFBQTtJQTBGRixtQkFBQztBQUFELENBQUMsQUF4RkQsSUF3RkM7QUF4Rlksb0JBQVksZUF3RnhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHB1YmxpYyBjb3VudGVyOiBudW1iZXIgPSAxNjtcblxuICAgIHB1YmxpYyBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlciArIFwiIHRhcHMgbGVmdFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiSG9vcnJhYWF5ISBcXG5Zb3UgYXJlIHJlYWR5IHRvIHN0YXJ0IGJ1aWxkaW5nIVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyLS07XG4gICAgfVxufSAqL1xuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XG4gICAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFO1xuICAgIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XG4gICAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgY3VycmVudFRhYk51bWJlclRvQmVTZWxlY3RlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcm91dGVyU3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxCb3R0b21CYXJJdGVtPiA9IFtcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJIb21lXCIsIFwicGluXCIsIFwiYmxhY2tcIiwgbmV3IE5vdGlmaWNhdGlvbihcImJsdWVcIiwgXCJ3aGl0ZVwiLCBcIjFcIikpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCBcIkNhbGVuZGFyXCIsIFwic3R1ZGVudFwiLCBcIiMxMDgzQkZcIiwgbmV3IE5vdGlmaWNhdGlvbihcImdyZWVuXCIsIFwiYmx1ZVwiLCBcIjFcIikpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgyLCBcIlByb2ZpbGVcIiwgXCJicmllZmNhc2VcIiwgXCJwaW5rXCIsIG5ldyBOb3RpZmljYXRpb24oXCJwaW5rXCIsIFwieWVsbG93XCIsIFwiMVwiKSksXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDMsIFwiTWVzc2FnZVwiLCBcImJvb2tcIiwgXCJncmVlblwiLCBuZXcgTm90aWZpY2F0aW9uKFwiZ3JlZW5cIiwgXCJyZWRcIiwgXCIxXCIpKVxuICAgIF07XG5cbiAgICBzZWxlY3RlZDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIH1cblxuXG4gICAgLy8gbmdPbkluaXQoKSB7XG4gICAgLy8gICAgIC8vQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXMsIGFuZCB0aGUgZmlyc3QgY2FsbCB0byBuZ09uQ2hhbmdlcy5cbiAgICAvLyAgICAgLy9BZGQgJ2ltcGxlbWVudHMgT25Jbml0JyB0byB0aGUgY2xhc3MuXG4gICAgLy8gICAgIHRoaXMucm91dGVyU3Vic2NyaWJlciA9IHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgLy8gICAgICAgICAvLyBpZiAodGhpcy5yb3V0ZXIuaXNBY3RpdmUoXCIvbWFpblwiLCBmYWxzZSkpIHtcbiAgICAvLyAgICAgICAgIGlmICh2YWx1ZS51cmwuaW5kZXhPZihcIi9tYWluXCIpICE9PSAtMSkge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW4gbWFpbnRhYiB2aWV3IFN1YnNjcmliZWQgdG8gdGhlIHJvdXRlciBhbmQgbm93IGluIG1haW4gcm9vdFwiKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBnZXRUYWJGcm9tVXJsID0gdmFsdWUudXJsLmNoYXJBdCh2YWx1ZS51cmwubGVuZ3RoIC0gMSk7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy50ZXh0VG9OdW1iZXIgPSBwYXJzZUludChnZXRUYWJGcm9tVXJsKTtcbiAgICAvLyAgICAgICAgICAgICAvL3RoaXMudGV4dFRvTnVtYmVyID0gK2dldFRhYkZyb21Vcmw7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2luZyB3aGVhdGhlciBwYXJzZWludCBpcyB3b3JraW5nIG9yIG5vdFwiICsgdGhpcy50ZXh0VG9OdW1iZXIpO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlVGFiRnJvbVVybENoYW5nZSgpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKysrKysrKysrKysrKysrKysrIEluIE9uIEluaXQgT2YgYXBwIENvbXBvbmVudCAqKioqKioqKioqKioqKioqKioqXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50Um91dGVyVXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgICAgICBpZiAoY3VycmVudFJvdXRlclVybC5pbmRleE9mKFwiL21haW5cIikgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluIGFwcCB2aWV3IFN1YnNjcmliZWQgdG8gdGhlIHJvdXRlciBhbmQgbm93IGluIG1haW4gcm9vdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGdldFRhYkZyb21VcmwgPSBjdXJyZW50Um91dGVyVXJsLmNoYXJBdChjdXJyZW50Um91dGVyVXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiTnVtYmVyVG9CZVNlbGVjdGVkID0gcGFyc2VJbnQoZ2V0VGFiRnJvbVVybCk7XG4gICAgICAgICAgICAvL3RoaXMuc2V0QWN0aXZlVGFiRnJvbVVybENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgLy90aGlzLnJvdXRlclN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0YWJMb2FkZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fYmFyID0gPEJvdHRvbUJhcj5ldmVudC5vYmplY3Q7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGl0bGVTdGF0ZSA9IFRJVExFX1NUQVRFLlNIT1dfV0hFTl9BQ1RJVkU7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5hY2NlbnRDb2xvciA9IFwiYmx1ZVwiO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiYmJiYmJiYmJiYgSW4gQm90dG9tYmFyIHRoZSB0YWIgbG9kZWQgaXMgZmlyZWQgJiYmJiYmJiYmJlwiKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUYWJGcm9tVXJsQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgLy8gb25seSB0cmlnZ2VyZWQgd2hlbiBhIGRpZmZlcmVudCB0YWIgaXMgdGFwcGVkXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJiYmJiYmJiYmJiBJbiBCb3R0b21iYXIgdGhlIHRhYiBpcyBzZWxlY3RlZCBmcm9tIFVJICYmJiYmJiYmJiZcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIG5ldyB0YWIgc2VsZWN0ZWQgaXMgXCIgKyBhcmdzLm5ld0luZGV4KTtcbiAgICAgICAgY29uc3Qgcm91dGVQYXJhbWV0ZXJJbmRleCA9IGFyZ3MubmV3SW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21haW4vXCIgKyByb3V0ZVBhcmFtZXRlckluZGV4XSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBzZXRBY3RpdmVUYWJGcm9tVXJsQ2hhbmdlXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0YWIgYnkgZ2V0dGluZyB0aGUgaW5mb3JtYXRpb24gZnJvbSB1cmwuXG4gICAgICovXG4gICAgcHVibGljIHNldEFjdGl2ZVRhYkZyb21VcmxDaGFuZ2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiJiYmJiYmJiYmJiBUaGUgdGFiIHNlbGVjdGVkIGZyb20gdXJsIGNoYW5nZSAmJiYmJiYmJiYmXCIpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFiTnVtYmVyVG9CZVNlbGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9iYXIuc2VsZWN0SXRlbSh0aGlzLmN1cnJlbnRUYWJOdW1iZXJUb0JlU2VsZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuY3VycmVudFRhYk51bWJlclRvQmVTZWxlY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn0gICAgIl19