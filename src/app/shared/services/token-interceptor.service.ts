import { HttpInterceptor } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  public viewNavbar = new EventEmitter<boolean>();

  intercept( req , next ){

    const token = localStorage.getItem('token')
    const tokenHeader = req.clone({
      setHeaders:{
        auth: `Bearer ${token}`
      }
    });
    return next.handle(tokenHeader);
    
  }
  constructor() { }
}
