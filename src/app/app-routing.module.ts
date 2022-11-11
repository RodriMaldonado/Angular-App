import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultardatosComponent } from './pages/consultas/consultardatos/consultardatos.component';
import { IndexComponent } from './pages/index/index.component';
import { Layout1Component } from './pages/layout1/layout1.component';
//import { consultas } from './pages/consultas/consultas.component';


const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path:'layout1', component:Layout1Component},
  {path:'consultadatos', component:ConsultardatosComponent},
  {path:'', component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
