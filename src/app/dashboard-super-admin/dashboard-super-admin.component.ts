import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard-super-admin',
  templateUrl: './dashboard-super-admin.component.html',
  styleUrls: ['./dashboard-super-admin.component.css']
})
export class DashboardSuperAdminComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getSuperAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
