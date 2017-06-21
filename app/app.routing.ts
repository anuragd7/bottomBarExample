import { TestComponent } from "./test.component";
import { AppComponent } from "./app.component";
import { Test1Component } from "./test1.component";
import { Test2Component } from "./test2.component";

export const AppRoutes: any = [
    {
        path: "main", component: AppComponent,
        children: [
            { path: "0", component: TestComponent },
            { path: "1", component: Test1Component },
            { path: "", redirectTo: "0", pathMatch: "full" },
        ],
    },
    { path: "", redirectTo: "main/0", pathMatch: "full" },
    { path: "other", component: Test2Component, pathMatch: "full" },
];
