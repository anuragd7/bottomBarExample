import { AbcComponent } from "./test.component";
import { AppComponent } from "./app.component";
import { XyzComponent } from "./test1.component";
import { PqrComponent } from "./test2.component";

export const AppRoutes: any = [
    {
        path: "main", component: AppComponent,
        children: [
            { path: "0", component: AbcComponent },
            { path: "1", component: XyzComponent },
            { path: "", redirectTo: "0", pathMatch: "full" },
        ],
    },
    { path: "", redirectTo: "main", pathMatch: "full" },
    { path: "other", component: PqrComponent, pathMatch: "full" },
];
