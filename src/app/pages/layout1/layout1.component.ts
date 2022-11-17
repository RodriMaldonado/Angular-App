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
  nroCliente!:any;  
  mensajeCliente!:string;

  numerocliente!:number;
  emailCliente!:string;
  nombreCliente!:string;
  apellidoCliente!:string;
  estadoCliente!:string;
  refCliente!:any;
  rocstarId!:number;
  userIdRocstar!:any;
  loginCliente!:any;
  idTenant!:any;
  modificado!:any;

  @Input() listaDatosCliente!:string[];
  @Input() listaSuscripciones!:string[];
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

    this.menuService.consultarDatosCliente(this.nroCliente).subscribe( data => {
      console.log(data);
      console.log(data.datosCliente.Email);
      if (data.datosCliente.ActivationCode!=0 ){
        //if (data.status==200 ){
        //vamos al componente consultas a mostrar los datos 
        //this.router.navigateByUrl('consultas'); ///no funciona aún
        
        this.numerocliente=data.datosCliente.ActivationCode;
       this.emailCliente=data.datosCliente.Email;
       this.nombreCliente=data.datosCliente.Nombre;
       this.apellidoCliente=data.datosCliente.Apellido;
       this.estadoCliente=data.datosCliente.Estado;
       this.refCliente=data.datosCliente.Ref;
       this.rocstarId=data.datosCliente.IdRocstar;
       this.userIdRocstar=data.datosCliente.IdUserRocstar;
       this.loginCliente=data.datosCliente.login;
       this.idTenant=data.datosCliente.tenantId;
       this.modificado=data.datosCliente.modificadoPor;
        
          this.listaSuscripciones=[data.datosCliente.suscripciones];

      }else {
        //mostrar por pantalla el mensaje de error
        this.mensajeCliente="Cliente no encontrado";
      }
    });
  }

  
}
