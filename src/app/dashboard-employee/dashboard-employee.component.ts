import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard-employee',
  templateUrl: './dashboard-employee.component.html',
  styleUrls: ['./dashboard-employee.component.css']
})
export class DashboardEmployeeComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getEmployeeBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
