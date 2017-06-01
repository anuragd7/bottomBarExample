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
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.routerSubscriber = this.router.events.subscribe(function (value) {
            console.log(value);
            // if (this.router.isActive("/main", false)) {
            if (value.url.indexOf("/main") !== -1) {
                console.log("In maintab view Subscribed to the router and now in main root");
                var getTabFromUrl = value.url.charAt(value.url.length - 1);
                _this.textToNumber = parseInt(getTabFromUrl);
                //this.textToNumber = +getTabFromUrl;
                console.log("Checking wheather parseint is working or not" + _this.textToNumber);
                _this.setActiveTabFromUrlChange();
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.routerSubscriber.unsubscribe();
    };
    AppComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this.hidden = false;
        this.titleState = 0 /* SHOW_WHEN_ACTIVE */;
        this.inactiveColor = "white";
        this.accentColor = "blue";
    };
    AppComponent.prototype.tabSelected = function (args) {
        // only triggered when a different tab is tapped
        console.log(args.newIndex);
        var routeParameterIndex = args.newIndex.toString();
        this.router.navigate(["/main/" + routeParameterIndex]);
    };
    /**
     * setActiveTabFromUrlChange
     * Sets the current tab by getting the information from url.
     */
    AppComponent.prototype.setActiveTabFromUrlChange = function () {
        console.log("The tab selected from url is " + this.textToNumber);
        //this.bottomBar.selectItem(this.textToNumber);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJOztBQUdKLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxxQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN2RCx1Q0FBbUcsd0JBQXdCLENBQUMsQ0FBQTtBQUc1SCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QyxzQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsa0NBQVMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQU85QztJQWdCSSxzQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQM0IsVUFBSyxHQUF5QjtZQUNqQyxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUkscUNBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxxQ0FBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUYsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLHFDQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3RixJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUkscUNBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFGLENBQUM7SUFJRixDQUFDO0lBR0QsK0JBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEcsaUdBQWlHO1FBQ2pHLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLDhDQUE4QztZQUM5QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0RBQStELENBQUMsQ0FBQztnQkFDN0UsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM1QyxxQ0FBcUM7Z0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRixLQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNyQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0Qsa0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFjLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyx3QkFBNEIsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLElBQW1DO1FBQzNDLGdEQUFnRDtRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHRDs7O09BR0c7SUFDSSxnREFBeUIsR0FBaEM7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRSwrQ0FBK0M7SUFDbkQsQ0FBQztJQXZFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O29CQUFBO0lBcUVGLG1CQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQztBQW5FWSxvQkFBWSxlQW1FeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHVibGljIGNvdW50ZXI6IG51bWJlciA9IDE2O1xuXG4gICAgcHVibGljIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyICsgXCIgdGFwcyBsZWZ0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJIb29ycmFhYXkhIFxcbllvdSBhcmUgcmVhZHkgdG8gc3RhcnQgYnVpbGRpbmchXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXItLTtcbiAgICB9XG59ICovXG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBCb3R0b21CYXIsIEJvdHRvbUJhckl0ZW0sIFRJVExFX1NUQVRFLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgTm90aWZpY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJvdHRvbWJhcic7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5cbnJlZ2lzdGVyRWxlbWVudCgnQm90dG9tQmFyJywgKCkgPT4gQm90dG9tQmFyKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnNhcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcbiAgICBwdWJsaWMgdGl0bGVTdGF0ZTogVElUTEVfU1RBVEU7XG4gICAgcHVibGljIF9iYXI6IEJvdHRvbUJhcjtcbiAgICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyB0ZXh0VG9OdW1iZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIHJvdXRlclN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8Qm90dG9tQmFySXRlbT4gPSBbXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDAsIFwiSG9tZVwiLCBcInBpblwiLCBcImJsYWNrXCIsIG5ldyBOb3RpZmljYXRpb24oXCJibHVlXCIsIFwid2hpdGVcIiwgXCIxXCIpKSxcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMSwgXCJDYWxlbmRhclwiLCBcInN0dWRlbnRcIiwgXCIjMTA4M0JGXCIsIG5ldyBOb3RpZmljYXRpb24oXCJncmVlblwiLCBcImJsdWVcIiwgXCIxXCIpKSxcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMiwgXCJQcm9maWxlXCIsIFwiYnJpZWZjYXNlXCIsIFwicGlua1wiLCBuZXcgTm90aWZpY2F0aW9uKFwicGlua1wiLCBcInllbGxvd1wiLCBcIjFcIikpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgzLCBcIk1lc3NhZ2VcIiwgXCJib29rXCIsIFwiZ3JlZW5cIiwgbmV3IE5vdGlmaWNhdGlvbihcImdyZWVuXCIsIFwicmVkXCIsIFwiMVwiKSlcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxuICAgICAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkluaXQnIHRvIHRoZSBjbGFzcy5cbiAgICAgICAgdGhpcy5yb3V0ZXJTdWJzY3JpYmVyID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnJvdXRlci5pc0FjdGl2ZShcIi9tYWluXCIsIGZhbHNlKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLnVybC5pbmRleE9mKFwiL21haW5cIikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbiBtYWludGFiIHZpZXcgU3Vic2NyaWJlZCB0byB0aGUgcm91dGVyIGFuZCBub3cgaW4gbWFpbiByb290XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdldFRhYkZyb21VcmwgPSB2YWx1ZS51cmwuY2hhckF0KHZhbHVlLnVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRUb051bWJlciA9IHBhcnNlSW50KGdldFRhYkZyb21VcmwpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy50ZXh0VG9OdW1iZXIgPSArZ2V0VGFiRnJvbVVybDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIHdoZWF0aGVyIHBhcnNlaW50IGlzIHdvcmtpbmcgb3Igbm90XCIgKyB0aGlzLnRleHRUb051bWJlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVUYWJGcm9tVXJsQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVyU3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRhYkxvYWRlZChldmVudCkge1xuICAgICAgICB0aGlzLl9iYXIgPSA8Qm90dG9tQmFyPmV2ZW50Lm9iamVjdDtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aXRsZVN0YXRlID0gVElUTEVfU1RBVEUuU0hPV19XSEVOX0FDVElWRTtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmFjY2VudENvbG9yID0gXCJibHVlXCI7XG4gICAgfVxuXG4gICAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgLy8gb25seSB0cmlnZ2VyZWQgd2hlbiBhIGRpZmZlcmVudCB0YWIgaXMgdGFwcGVkXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xuICAgICAgICBjb25zdCByb3V0ZVBhcmFtZXRlckluZGV4ID0gYXJncy5uZXdJbmRleC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWFpbi9cIiArIHJvdXRlUGFyYW1ldGVySW5kZXhdKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIHNldEFjdGl2ZVRhYkZyb21VcmxDaGFuZ2VcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRhYiBieSBnZXR0aW5nIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHVybC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0QWN0aXZlVGFiRnJvbVVybENoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgdGFiIHNlbGVjdGVkIGZyb20gdXJsIGlzIFwiICsgdGhpcy50ZXh0VG9OdW1iZXIpO1xuICAgICAgICAvL3RoaXMuYm90dG9tQmFyLnNlbGVjdEl0ZW0odGhpcy50ZXh0VG9OdW1iZXIpO1xuICAgIH1cbn0gICAgIl19