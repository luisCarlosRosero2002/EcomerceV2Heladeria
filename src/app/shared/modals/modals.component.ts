import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../services/token-interceptor.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  @Input() dataCar:any
  public selectedValue:any;

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
    
  }

  
  
  public closeModal(){
    
    console.log(this.dataCar);
    this.tokenInterceptorService.$modal.emit(false);
  }

  public precioTotal(){
    let data = JSON.parse(JSON.stringify(this.dataCar));
    return data.reduce( (x,y) => x + y['precioxUni'] ,0);

  }

}
