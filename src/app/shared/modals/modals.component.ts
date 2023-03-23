import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../services/token-interceptor.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  @Input() dataCar:any

  constructor( private tokenInterceptorService: TokenInterceptorService)
  {}

  ngOnInit(): void {
    // this.getProducts();
    
  }
  
  public closeModal(){
    
    // console.log(this.dataCar);
    this.tokenInterceptorService.$modal.emit(false);
  }

  // public getProducts(){
  //   this.tokenInterceptorService.getAllProductsCar().subscribe(
  //     res => {
  //       this.dataCar = res;
  //       console.log(this.dataCar);
        
  //     }
  //   )
  // }

}
