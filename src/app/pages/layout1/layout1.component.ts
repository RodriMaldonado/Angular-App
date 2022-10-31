import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  constructor(public userService: UsersService) {}
  ngOnInit() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    });
  }
}