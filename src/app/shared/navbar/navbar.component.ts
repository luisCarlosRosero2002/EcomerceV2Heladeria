import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() viewUser = false;
  
  public constructor(
    private authService:AuthService,
    private router:Router
  ){}

  public singOut(){
    this.viewUser = false
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    
  }
}
