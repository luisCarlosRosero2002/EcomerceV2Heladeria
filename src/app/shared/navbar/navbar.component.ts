import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TokenInterceptorService } from '../services/token-interceptor.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public viewUser:boolean = false;
  
  public constructor(
    private authService:AuthService,
    private router:Router,
    private tokenInterceptorSercice:TokenInterceptorService
  ){}

  ngOnInit(): void {
    
    this.tokenInterceptorSercice.viewNavbar.subscribe(
      res => {
        console.log(res);
        this.viewUser = res
      }
    )
  }


  public singOut(){
    this.viewUser = false
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    
  }
}
