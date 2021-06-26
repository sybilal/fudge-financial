import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/layout/sidebar/sidebar.component';
import { SidebarItemComponent } from './dashboard/layout/sidebar-item/sidebar-item.component';
import { HeaderComponent } from './dashboard/layout/header/header.component';
import { ChartsModule } from 'ng2-charts';
import { PerformanceChartComponent } from './dashboard/components/performance-chart/performance-chart.component';
import { GoalsChartsComponent } from './dashboard/components/goals-charts/goals-charts.component';
import { IndustryNewsComponent } from './dashboard/components/industry-news/industry-news.component';
import { TopCommentsComponent } from './dashboard/components/top-comments/top-comments.component';
import { UsersComponent } from './dashboard/components/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    DashboardComponent,
    SidebarComponent,
    SidebarItemComponent,
    HeaderComponent,
    PerformanceChartComponent,
    GoalsChartsComponent,
    IndustryNewsComponent,
    TopCommentsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
