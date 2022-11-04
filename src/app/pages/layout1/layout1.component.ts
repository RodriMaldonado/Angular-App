import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';
import { MenuService } from 'src/app/menu/menu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  perfil!:string;
  nroCliente!:number;  
  mensajeCliente!:string;

  constructor(public userService: UsersService, public menuService: MenuService, public router: Router) {}
  
  ngOnInit() {
    
    //muestro lo que está almacenado en la cookie de perfil
    this.perfil=this.userService.getPerfil();
    console.log(this.perfil);
    
  }
  
  consultarCliente(){
    console.log(this.nroCliente);

    this.menuService.consultarDatosCliente(this.nroCliente).subscribe( data => {
      console.log(data);
       /*if (data.ContractNumber!='0' ){
        //seteamos las cookies con el valor del tocken y el perfil del usuario
        
        this.router.navigateByUrl('consultas');
      }else {
        //mostrar por pantalla el mensaje de error
        this.mensajeCliente="Cliente no encontrado";
      }*/
    });
  }
}
