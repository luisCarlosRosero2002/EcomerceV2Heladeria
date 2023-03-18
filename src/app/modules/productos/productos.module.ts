import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ProductosService } from './services/productos.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  }
];

@NgModule({
  declarations: [
    ProductosComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents:[
    ProductosComponent
  ],
  providers:[
    ProductosService
  ]
})
export class ProductosModule { }
