import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';
import { MenuService } from 'src/app/menu/menu.service';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";


@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  perfil!:string; //perfil login
  usuario!:string;//usuario login
  nroCliente!:any;  
  mensajeCliente!:string;
  
  listaDatosCliente!:string[];
  listaSuscripciones!:string[];
  parentMessage = "message from parent";

  constructor(public userService: UsersService, public menuService: MenuService, public router: Router, private cookies: CookieService) {}
  
  ngOnInit() {
    
    //muestro lo que está almacenado en la cookie de perfil
    this.perfil=this.userService.getPerfil();
    this.usuario=this.userService.getUsuario();
    console.log(this.perfil);
    
  }
  
  //borramos las cookies al
    ngOnDestroy() {
      this.cookies.delete("perfil");
      this.cookies.delete("usuario");
      this.cookies.delete("token");
    }
  

  consultarCliente(){
    console.log(this.nroCliente);

      if (this.nroCliente!=0 ){
          
          //vamos al componente consultas a mostrar los datos 
        this.userService.setNroCliente(this.nroCliente);
        this.router.navigateByUrl('consultas'); ///no funciona aún

      }else {
        //mostrar por pantalla el mensaje de error
        this.mensajeCliente="Cliente no encontrado";
      }
    };
}
