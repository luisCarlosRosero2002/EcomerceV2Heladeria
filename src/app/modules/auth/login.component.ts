import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { login } from './models/login.model';
import { BasicUser } from './models/users.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // @Output('evento') eventoLogin = new EventEmitter<boolean>();
  public user: BasicUser = new BasicUser();
  public flagLogin:boolean = true;
  public viewUser:boolean = false;

  public constructor(
    private authService:AuthService,
    private router:Router
  ){}

  public lisentFormLogin( res:number ){
    this.flagLogin =!this.flagLogin;
  }

  public onLogin(){
    
    const input:login = { usuario: this.user.name , password: this.user.password };
    
    console.log(input);
   
    this.authService.authentication(input).subscribe(
      res => {
        if(res){
          console.log(res);
          this.viewUser = true;
          console.log(this.viewUser);
          
          // this.eventoLogin.emit(this.viewUser);
          localStorage.setItem('token',res.token);
          this.router.navigate(['/perfil']);
        }else{
          console.log("espuesta",res);

        }
      }
    )
    
    
  }

  public onRegister(){

  }

}
