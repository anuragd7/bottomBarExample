"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var test_component_1 = require("./test.component");
var app_component_1 = require("./app.component");
var test1_component_1 = require("./test1.component");
var test2_component_1 = require("./test2.component");
var mains_component_1 = require("./mains.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, test_component_1.TestComponent, test1_component_1.Test1Component, test2_component_1.Test2Component, mains_component_1.MainsComponent],
            bootstrap: [mains_component_1.MainsComponent],
            imports: [nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.AppRoutes),
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxvQ0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUV2RSwrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCw0QkFBMEIsZUFFMUIsQ0FBQyxDQUZ3QztBQVd6QztJQUFBO0lBQXlCLENBQUM7SUFUMUI7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDhCQUFhLEVBQUUsZ0NBQWMsRUFBRSxnQ0FBYyxFQUFFLGdDQUFjLENBQUM7WUFDM0YsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0I7Z0JBQ3hCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUM7YUFDOUM7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRlc3QxQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdDEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUZXN0MkNvbXBvbmVudCB9IGZyb20gXCIuL3Rlc3QyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbnNDb21wb25lbnQgfSBmcm9tIFwiLi9tYWlucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCJcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIFRlc3RDb21wb25lbnQsIFRlc3QxQ29tcG9uZW50LCBUZXN0MkNvbXBvbmVudCwgTWFpbnNDb21wb25lbnRdLFxuICAgIGJvb3RzdHJhcDogW01haW5zQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KEFwcFJvdXRlcyksXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19