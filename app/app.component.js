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
        this.hidden = false;
        this.titleState = 0 /* SHOW_WHEN_ACTIVE */;
        this.inactiveColor = "white";
        this.accentColor = "blue";
    }
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
        // this.hidden = false;
        // this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
        // this.inactiveColor = "white";
        // this.accentColor = "blue";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJOztBQUdKLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxxQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN2RCx1Q0FBbUcsd0JBQXdCLENBQUMsQ0FBQTtBQUc1SCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QyxzQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsa0NBQVMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQU85QztJQWtCSSxzQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUM0IsVUFBSyxHQUF5QjtZQUNqQyxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUkscUNBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxxQ0FBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUYsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLHFDQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3RixJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUkscUNBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFGLENBQUM7UUFFRixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsd0JBQTRCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUdELCtCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7UUFDbEYsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQztZQUN6RSxJQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEUsQ0FBQztJQUNMLENBQUM7SUFHRCxrQ0FBVyxHQUFYO1FBQ0ksc0NBQXNDO0lBQzFDLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQWMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyx1QkFBdUI7UUFDdkIsa0RBQWtEO1FBQ2xELGdDQUFnQztRQUNoQyw2QkFBNkI7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksSUFBbUM7UUFDM0MsZ0RBQWdEO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHRDs7O09BR0c7SUFDSSxnREFBeUIsR0FBaEM7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7UUFDdEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUE0QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUE1RUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDOztvQkFBQTtJQTBFRixtQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7QUF4RVksb0JBQVksZUF3RXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHB1YmxpYyBjb3VudGVyOiBudW1iZXIgPSAxNjtcblxuICAgIHB1YmxpYyBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlciArIFwiIHRhcHMgbGVmdFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiSG9vcnJhYWF5ISBcXG5Zb3UgYXJlIHJlYWR5IHRvIHN0YXJ0IGJ1aWxkaW5nIVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyLS07XG4gICAgfVxufSAqL1xuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XG4gICAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFO1xuICAgIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XG4gICAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgY3VycmVudFRhYk51bWJlclRvQmVTZWxlY3RlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcm91dGVyU3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxCb3R0b21CYXJJdGVtPiA9IFtcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJIb21lXCIsIFwicGluXCIsIFwiYmxhY2tcIiwgbmV3IE5vdGlmaWNhdGlvbihcImJsdWVcIiwgXCJ3aGl0ZVwiLCBcIjFcIikpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCBcIkNhbGVuZGFyXCIsIFwic3R1ZGVudFwiLCBcIiMxMDgzQkZcIiwgbmV3IE5vdGlmaWNhdGlvbihcImdyZWVuXCIsIFwiYmx1ZVwiLCBcIjFcIikpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgyLCBcIlByb2ZpbGVcIiwgXCJicmllZmNhc2VcIiwgXCJwaW5rXCIsIG5ldyBOb3RpZmljYXRpb24oXCJwaW5rXCIsIFwieWVsbG93XCIsIFwiMVwiKSksXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDMsIFwiTWVzc2FnZVwiLCBcImJvb2tcIiwgXCJncmVlblwiLCBuZXcgTm90aWZpY2F0aW9uKFwiZ3JlZW5cIiwgXCJyZWRcIiwgXCIxXCIpKVxuICAgIF07XG5cbiAgICBzZWxlY3RlZDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aXRsZVN0YXRlID0gVElUTEVfU1RBVEUuU0hPV19XSEVOX0FDVElWRTtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmFjY2VudENvbG9yID0gXCJibHVlXCI7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIrKysrKysrKysrKysrKysrKysgSW4gT24gSW5pdCBPZiBhcHAgQ29tcG9uZW50ICoqKioqKioqKioqKioqKioqKipcIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZXJVcmwgPSB0aGlzLnJvdXRlci51cmw7XG4gICAgICAgIGlmIChjdXJyZW50Um91dGVyVXJsLmluZGV4T2YoXCIvbWFpblwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW4gYXBwIHZpZXcgU3Vic2NyaWJlZCB0byB0aGUgcm91dGVyIGFuZCBub3cgaW4gbWFpbiByb290XCIpO1xuICAgICAgICAgICAgY29uc3QgZ2V0VGFiRnJvbVVybCA9IGN1cnJlbnRSb3V0ZXJVcmwuY2hhckF0KGN1cnJlbnRSb3V0ZXJVcmwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWJOdW1iZXJUb0JlU2VsZWN0ZWQgPSBwYXJzZUludChnZXRUYWJGcm9tVXJsKTtcbiAgICAgICAgICAgIC8vdGhpcy5zZXRBY3RpdmVUYWJGcm9tVXJsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvL3RoaXMucm91dGVyU3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRhYkxvYWRlZChldmVudCkge1xuICAgICAgICB0aGlzLl9iYXIgPSA8Qm90dG9tQmFyPmV2ZW50Lm9iamVjdDtcbiAgICAgICAgLy8gdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy50aXRsZVN0YXRlID0gVElUTEVfU1RBVEUuU0hPV19XSEVOX0FDVElWRTtcbiAgICAgICAgLy8gdGhpcy5pbmFjdGl2ZUNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAvLyB0aGlzLmFjY2VudENvbG9yID0gXCJibHVlXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiJiYmJiYmJiYmJiBJbiBCb3R0b21iYXIgdGhlIHRhYiBsb2RlZCBpcyBmaXJlZCAmJiYmJiYmJiYmXCIpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRhYkZyb21VcmxDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgICAgICAvLyBvbmx5IHRyaWdnZXJlZCB3aGVuIGEgZGlmZmVyZW50IHRhYiBpcyB0YXBwZWRcbiAgICAgICAgY29uc29sZS5sb2coXCImJiYmJiYmJiYmIEluIEJvdHRvbWJhciB0aGUgdGFiIGlzIHNlbGVjdGVkIGZyb20gVUkgJiYmJiYmJiYmJlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgbmV3IHRhYiBzZWxlY3RlZCBpcyBcIiArIGFyZ3MubmV3SW5kZXgpO1xuICAgICAgICBjb25zdCByb3V0ZVBhcmFtZXRlckluZGV4ID0gYXJncy5uZXdJbmRleC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWFpbi9cIiArIHJvdXRlUGFyYW1ldGVySW5kZXhdKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIHNldEFjdGl2ZVRhYkZyb21VcmxDaGFuZ2VcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRhYiBieSBnZXR0aW5nIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHVybC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0QWN0aXZlVGFiRnJvbVVybENoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCImJiYmJiYmJiYmIFRoZSB0YWIgc2VsZWN0ZWQgZnJvbSB1cmwgY2hhbmdlICYmJiYmJiYmJiZcIik7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWJOdW1iZXJUb0JlU2VsZWN0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhci5zZWxlY3RJdGVtKHRoaXMuY3VycmVudFRhYk51bWJlclRvQmVTZWxlY3RlZCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5jdXJyZW50VGFiTnVtYmVyVG9CZVNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgfVxufSAgICAiXX0=