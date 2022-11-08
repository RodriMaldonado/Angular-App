import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';
import { MenuService } from 'src/app/pages/menu/menu.service';
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
  nroCliente!:number;  
  mensajeCliente!:string;
  contacts:any;

  constructor(public userService: UsersService, public menuService: MenuService, public router: Router, private cookies: CookieService) {}
  
  ngOnInit() {
    
    //muestro lo que está almacenado en la cookie de perfil
    this.perfil=this.userService.getPerfil();
    this.usuario=this.userService.getUsuario();
    console.log(this.perfil);
    
  }
  
  //borramos las cookis al salir
    ngOnDestroy() {
      this.cookies.delete("perfil");
      this.cookies.delete("usuario");
      this.cookies.delete("token");
    }
  

  consultarCliente(){
    console.log(this.nroCliente);
   
    this.menuService.consultarDatosCliente(this.nroCliente).subscribe( data => {
      console.log(data);
      console.log(data.datosCliente.Contact.Email);
      if (data.datosCliente.ActivationCode!=0 ){
        //vamos al componente consultas a mostrar los datos 
        //this.router.navigateByUrl('consultas'); ///no funciona aún
        this.mensajeCliente=data.datosCliente.Contact.Email;
        this.userService.getContacts().subscribe(data => {
          this.contacts=data;
        });
      }else {
        //mostrar por pantalla el mensaje de error
        this.mensajeCliente="Cliente no encontrado";
      }
    });
   
  }

  
}
