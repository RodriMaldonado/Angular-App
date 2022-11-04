import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';
import { MenuService } from 'src/app/pages/menu/menu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {
  nroCliente!:number;
  perfil!:string;
    
  constructor(public userService: UsersService, public menuService: MenuService, public router: Router) {}
  
  ngOnInit() {
    
    //muestro lo que está almacenado en la cookie de perfil
    this.perfil=this.userService.getPerfil();
    console.log(this.perfil);
    
  }
  
  consultarCliente(){
    


    //console.log(this.nroCliente);
    //this.menuService.consultarDatosCliente(nroCliente);

    //if (data.ContractNumber!='0' ){
      //si la consulta de cliente trae datos vamos al componente consultas a mostrar todos los datos del cliente 
      //this.router.navigateByUrl('consultas');
      //}
  }
}
