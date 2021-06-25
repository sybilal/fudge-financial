import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";

const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', component: SplashScreenComponent,
    }, {
        path: 'dashboard', component: DashboardComponent,
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }