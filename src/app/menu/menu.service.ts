import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs-compat/Observable"
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  consultarDatosCliente(nroCliente: number){
    //buscamos la información del cliente que recibimos por parámetro en la api
    return this.http.get("https://consultas.iptel.com.ar/api_iptelplay/menu.php");

  }
}