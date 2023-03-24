import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../services/token-interceptor.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  @Input() dataCar:any
  


  public numbers = [
    { name: 1},
    { name: 2},
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
  ];
  constructor( private tokenInterceptorService: TokenInterceptorService)
  {}

  ngOnInit(): void {
    // this.getProducts();
    // this.precioTotal();
  }

  
  
  // public closeModal(){
    
  //   console.log("datacar",this.dataCar);
  //   this.tokenInterceptorService.$modal.emit(false);
  // }

  public precioTotal(){

    let valorTot:number = 0;
    if((typeof this.dataCar).toString() != 'undefined') {
      debugger
      // let 
      this.dataCar.map( x => {
        valorTot = valorTot +x['subTotal']
      });
      return valorTot;
    }
    return 0;

  }

}
