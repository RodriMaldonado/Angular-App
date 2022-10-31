import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/user.service';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
=======
import { Router } from '@angular/router';
>>>>>>> nelson_api

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

<<<<<<< HEAD
  form:FormGroup;
  

  constructor(public userService: UsersService, private formBuilder:FormBuilder, private router:Router) { 
    this.form=this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password: ["", [Validators.required,Validators.maxLength(8),Validators.minLength(5) ]]
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

  formLogin() {
    if(this.form.valid)
    {
      let email:string=this.form.get('email')?.value;
      let password:string=this.form.get('password')?.value;

      let login:Login= new Login(email,password)

    this.userService.formLogin(login).subscribe( data => {
      console.log(data)
      this.router.navigate(['layout1']);

  },
  respuestaError=>{
    alert("Se ha producido un error")
  })

  

=======
  constructor(public userService: UsersService,public router: Router) { 
    
  }

  login()  {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data => {
        //preguntar si tenemos el token para avanzar a dejar en una cookie de lo contrario mostrar mensaje de error en el usurio
        this.userService.setToken(data.token);
        });
    
    this.router.navigateByUrl('layout1');
    
>>>>>>> nelson_api
}
}
}