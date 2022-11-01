import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  perfil!:string;

  constructor(public userService: UsersService) {}
  ngOnInit() {
    //muestro lo que está almacenado en la cookie de perfil
    console.log(this.userService.getPerfil());
    
  }
}