import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardSuperAdminComponent } from './dashboard-super-admin/dashboard-super-admin.component';
import { DashboardEmployeeComponent } from './dashboard-employee/dashboard-employee.component';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    DashboardAdminComponent,
    DashboardSuperAdminComponent,
    DashboardEmployeeComponent,
    DashboardDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
