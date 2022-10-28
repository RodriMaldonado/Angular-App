import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat/Observable"
import { Login } from "../model/login";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  formLogin(login:Login): Observable<any> {
    return this.http.post("https://reqres.in/api/login", login);
  }
}

/* eve.holt@reqres.in mail api */