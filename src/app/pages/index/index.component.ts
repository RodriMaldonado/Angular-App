import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService: UsersService,private router: Router) { 
    this.form=this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
   }

   get email()
   {
    return this.form.get("email");
   }

   get password()
   {
    return this.form.get("password")
   }

  ngOnInit(): void {
  }

  

  login()  
  {
    if(this.form.valid)
    {
      let email:string=this.form.get('email')?.value;
      let password:string=this.form.get('password')?.value;

      let login:Login= new Login(email,password)

    this.userService.login(login).subscribe(data => {
        //preguntar si tenemos el token para avanzar a dejar en una cookie de lo contrario mostrar mensaje de error en el usurio
        this.userService.setToken(data.token);
        });
    
    this.router.navigateByUrl('layout1');
      }
    
}
}
