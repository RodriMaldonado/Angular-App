import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  email!:string;
  password!:string;

  constructor(public userService: UsersService,public router: Router) { 
    
  }

  login()  {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data => {
        //preguntar si tenemos el token para avanzar a dejar en una cookie de lo contrario mostrar mensaje de error en el usurio
        this.userService.setToken(data.token);
        });
    
    this.router.navigateByUrl('layout1');
    
}
}