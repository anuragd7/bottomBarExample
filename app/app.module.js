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
            declarations: [app_component_1.AppComponent, test_component_1.AbcComponent, test1_component_1.XyzComponent, test2_component_1.PqrComponent, mains_component_1.MainsComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxvQ0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUV2RSwrQkFBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQUNoRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCw0QkFBMEIsZUFFMUIsQ0FBQyxDQUZ3QztBQVd6QztJQUFBO0lBQXlCLENBQUM7SUFUMUI7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDZCQUFZLEVBQUUsOEJBQVksRUFBRSw4QkFBWSxFQUFFLGdDQUFjLENBQUM7WUFDdEYsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0I7Z0JBQ3hCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUM7YUFDOUM7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBYmNDb21wb25lbnQgfSBmcm9tIFwiLi90ZXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgWHl6Q29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdDEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcXJDb21wb25lbnQgfSBmcm9tIFwiLi90ZXN0Mi5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1haW5zQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpbnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcHBSb3V0ZXMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBBYmNDb21wb25lbnQsIFh5ekNvbXBvbmVudCwgUHFyQ29tcG9uZW50LCBNYWluc0NvbXBvbmVudF0sXG4gICAgYm9vdHN0cmFwOiBbTWFpbnNDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoQXBwUm91dGVzKSxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=