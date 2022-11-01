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
  errorlogin:string;
  constructor(public userService: UsersService,public router: Router) { 
    
  }

  login()  {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data => {
        //validamos el usuario si trea el nivel que devuelve la api
        if (data.token!='' ){
          //seteamos las cookies con el valor del tocken y el perfil del usuario
          this.userService.setToken(data.token, data.nivel);
          this.router.navigateByUrl('layout1');
        }else {
          //mostrar por pantalla el mensaje de error
          this.errorlogin="Usuario o contraseña no válido";
        }
          
        });
    
    
    
}
}