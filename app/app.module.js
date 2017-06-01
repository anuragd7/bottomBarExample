"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var test_component_1 = require("./test.component");
var app_component_1 = require("./app.component");
var test1_component_1 = require("./test1.component");
var mains_component_1 = require("./mains.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, test_component_1.AbcComponent, test1_component_1.XyzComponent, mains_component_1.MainsComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxvQ0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUV2RSwrQkFBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQUNoRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCw0QkFBMEIsZUFFMUIsQ0FBQyxDQUZ3QztBQVd6QztJQUFBO0lBQXlCLENBQUM7SUFUMUI7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDZCQUFZLEVBQUUsOEJBQVksRUFBRSxnQ0FBYyxDQUFDO1lBQ3hFLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsT0FBTyxFQUFFLENBQUMsd0NBQWtCO2dCQUN4QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyx1QkFBUyxDQUFDO2FBQzlDO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQWJjQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFh5ekNvbXBvbmVudCB9IGZyb20gXCIuL3Rlc3QxLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbnNDb21wb25lbnQgfSBmcm9tIFwiLi9tYWlucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCJcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIEFiY0NvbXBvbmVudCwgWHl6Q29tcG9uZW50LCBNYWluc0NvbXBvbmVudF0sXG4gICAgYm9vdHN0cmFwOiBbTWFpbnNDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoQXBwUm91dGVzKSxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=