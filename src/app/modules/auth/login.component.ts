import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenInterceptorService } from 'src/app/shared/services/token-interceptor.service';
import { login } from './models/login.model';
import { register } from './models/register.model';
import { BasicRegisterUser, BasicUser } from './models/users.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // @Output('evento') eventoLogin = new EventEmitter<boolean>();
  public user: BasicUser = new BasicUser();
  public userRegister: BasicRegisterUser = new BasicRegisterUser();
  public flagLogin:boolean = true;
  public viewUser:boolean = false;

  public constructor(
    private authService:AuthService,
    private router:Router,
    private tokenInterceptorService :TokenInterceptorService
  ){}

  public lisentFormLogin(){
    this.flagLogin =!this.flagLogin;
  }

  public onLogin(){
    
    const input:login = { usuario: this.user.name , password: this.user.password };
    
    console.log(input);
   
    this.authService.authentication(input).subscribe(
      res => {
        if(res){
          console.log(res);
          this.tokenInterceptorService.viewNavbar.emit(true);
          // this.eventoLogin.emit(this.viewUser);
          localStorage.setItem('token',res.token);
          
          this.router.navigate(['/perfil']);
        }else{
          console.log("respuesta",res);

        }
      }
    )
    
    
  }

  public onRegister(){

    const input:register = 
    { 
      nombres: this.userRegister.nombres,
      apellidos: this.userRegister.apellidos,
      fechaNac: this.userRegister.fechaNac,
      telefono: this.userRegister.telefono,
      correo: this.userRegister.correo,
      direccion: this.userRegister.direccion,
      usuario: this.userRegister.name , 
      password: this.userRegister.password 
    };

    console.log(input);
    
    this.authService.addUser(input).subscribe(
      res => {
        if(res){
          console.log(res);
          this.tokenInterceptorService.viewNavbar.emit(true);
          // this.eventoLogin.emit(this.viewUser);
          localStorage.setItem('token',res.token);
          this.router.navigate(['/perfil']);
        }else{
          console.log("respuesta",res);

        }
      }
    )
  }

}
