import { Component, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public dataProducts:any;
  public Products:Array<object> = new Array<object>();

  public constructor(
    private productsService:ProductosService
  )
  {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.productsService.getProducts().subscribe(
      res => {
        if(res){
          this.dataProducts = res ;
          console.log(this.dataProducts);
        }
      }
    )
  }

  public addProducts(addItem){
    const data = {
      id_producto:addItem,
      cantidad:1
    }
    this.productsService.addProducts(data).subscribe(
      res => {
        
      }
    )
    console.log(addItem);
    
      
  }  
  

}
