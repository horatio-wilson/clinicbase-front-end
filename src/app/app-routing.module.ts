import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardSuperAdminComponent } from './dashboard-super-admin/dashboard-super-admin.component';
import { DashboardEmployeeComponent } from './dashboard-employee/dashboard-employee.component';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: DashboardAdminComponent },
  { path: 'super-admin', component: DashboardSuperAdminComponent },
  { path: 'employee', component: DashboardEmployeeComponent },
  { path: 'doctor', component: DashboardDoctorComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
