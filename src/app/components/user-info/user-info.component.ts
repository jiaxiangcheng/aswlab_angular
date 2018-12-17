import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {

  }

}
