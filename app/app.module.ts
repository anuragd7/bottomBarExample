import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AbcComponent } from "./test.component";
import { AppComponent } from "./app.component";
import { XyzComponent } from "./test1.component";
import { MainsComponent } from "./mains.component";
import { AppRoutes } from "./app.routing"

@NgModule({
    declarations: [AppComponent, AbcComponent, XyzComponent, MainsComponent],
    bootstrap: [MainsComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes),
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
