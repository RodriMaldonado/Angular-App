import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';
import { MenuService } from 'src/app/menu/menu.service';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
//import { layout1 } from 'src/app/menu/pages/layout1';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  
  perfil!:string; //perfil login
  nroCliente!:number; 
  clienteNro!:number;
  mensajeCliente!:string;

  listaDatosCliente!:string[];
  listaSuscripciones!:string[];

  

    constructor(public userService: UsersService, public menuService: MenuService, public router: Router, private cookies: CookieService) {}

  ngOnInit(): void {
   
    this.perfil=this.userService.getPerfil();
    console.log(this.perfil);
    //console.log(this.userService.getNroCliente);
    //this.nroCliente=nroCliente:this.form.get('nroCliente')?.value
    this.nroCliente=1000895;
  
    console.log(this.clienteNro);

    this.menuService.consultarDatosCliente(this.nroCliente).subscribe( data => {
      console.log(data);
      console.log(data.datosCliente.Email);
      if (data.datosCliente.ActivationCode!=0 ){
        //if (data.status==200 ){
        
        
        this.listaDatosCliente=[data.datosCliente.ActivationCode
          ,data.datosCliente.Email
          ,data.datosCliente.Nombre
          ,data.datosCliente.Apellido
          ,data.datosCliente.Estado
          ,data.datosCliente.Ref
          ,data.datosCliente.IdRocstar
          ,data.datosCliente.IdUserRocstar
          ,data.datosCliente.login
          ,data.datosCliente.tenantId
          ,data.datosCliente.modificadoPor];
        
          /////this.listaSuscripciones=[data.datosCliente.suscripciones];
          this.listaSuscripciones=[data.datosCliente.suscripciones[0],data.datosCliente.suscripciones[1]];

    
      }else {
        //mostrar por pantalla el mensaje de error
        this.mensajeCliente="Cliente no encontrado";
      }
    });

  }

}
