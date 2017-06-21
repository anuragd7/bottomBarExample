import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TestComponent } from "./test.component";
import { AppComponent } from "./app.component";
import { Test1Component } from "./test1.component";
import { Test2Component } from "./test2.component";
import { MainsComponent } from "./mains.component";
import { AppRoutes } from "./app.routing"

@NgModule({
    declarations: [AppComponent, TestComponent, Test1Component, Test2Component, MainsComponent],
    bootstrap: [MainsComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes),
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
