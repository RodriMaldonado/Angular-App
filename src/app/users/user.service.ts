import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs-compat/Observable"
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
  //funciona con  la pagina de ejemplo
  //return this.http.post("https://reqres.in/api/login", user);
  
  return this.http.post("https://consultas.iptel.com.ar/api_iptelplay/login.php",user);

  //funciona con el get
  //return this.http.get("https://consultas.iptel.com.ar/api_iptelplay/index.php");
  }

//
  setToken(token: string, perfil: string, usuario: string) {
    this.cookies.set("token", token);
    this.cookies.set("perfil", perfil)
    this.cookies.set("usuario", usuario)
  }
  //devuelve la cookie almacenada en el cliente
  getToken() {
    return this.cookies.get("token");
  }
   //devuelve la cookie almacenada del perfil
   getPerfil() {
    return this.cookies.get("perfil");
  }
   //devuelve la cookie almacenada el usuario
   getUsuario() {
    return this.cookies.get("usuario");
  }
  //devueleve el usuario
  getUser() {
    //return this.http.get("https://reqres.in/api/users/2");
    return this.http.get("https://consultas.iptel.com.ar/api_iptelplay/login.php");
  }
//busqueda de usaurio loggeado
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
    //return this.http.get("https://consultas.iptel.com.ar/api_iptelplay/login.php");
    return token;
  }

}
