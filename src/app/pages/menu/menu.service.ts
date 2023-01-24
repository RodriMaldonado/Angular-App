import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs-compat/Observable"
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  consultarDatosCliente(nroCliente: number):Observable<any>{
    //buscamos la información del cliente que recibimos por parámetro en la api
    //return this.http.post("https://consultas.iptel.com.ar/api_iptelplay/menu.php", nroCliente);
    const url = "https://consultas.iptel.com.ar/api_iptelplay/consultar.php?nroCliente=" + nroCliente;
    return this.http.get(url);

  }

  obtenerSucursalesSiga():Observable<any>{
    //obtenemos las sucursales de SIGA
    
    const url = "https://consultas.iptel.com.ar/api_iptelplay/obtenersucursales.php";
    return this.http.get(url);

  }

}