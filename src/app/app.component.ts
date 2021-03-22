import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showEmployeeBoard = false;
  showDoctorBoard = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  email?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showDoctorBoard = this.roles.includes('ROLE_DOCTOR');
      this.showEmployeeBoard = this.roles.includes('ROLE_EMPLOYEE');
      this.showSuperAdminBoard = this.roles.includes('ROLE_SUPER_ADMIN');
      this.email = user.email;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
