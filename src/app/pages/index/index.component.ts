import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  email:string;
  password:string;

  constructor(public userService: UsersService) { 
    
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
  });

  

}
}