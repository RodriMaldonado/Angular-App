import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs-compat/Observable"
<<<<<<< HEAD
import { Login } from "../model/login";
=======
import { CookieService } from "ngx-cookie-service";
>>>>>>> nelson_api

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

<<<<<<< HEAD
  formLogin(login:Login): Observable<any> {
    return this.http.post("https://reqres.in/api/login", login);
  }
}

/* eve.holt@reqres.in mail api */
=======
  login(user: any): Observable<any> {
  //funciona con  la pagina de ejemplo
  //return this.http.post("https://reqres.in/api/login", user);
  
  return this.http.post("https://consultas.iptel.com.ar/api_iptelplay/index.php",user);

  //funciona con el get
  //return this.http.get("https://consultas.iptel.com.ar/api_iptelplay/index.php");
  }

//
  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    //return this.http.get("https://reqres.in/api/users/2");
    return this.http.get("https://consultas.iptel.com.ar/api_iptelplay/index.php");
  }
//busqueda de usaurio loggeado
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
    //return this.http.get("https://consultas.iptel.com.ar/api_iptelplay/index.php");
    return token;
  }

}
>>>>>>> nelson_api
