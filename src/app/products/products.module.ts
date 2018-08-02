import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './page/product-list/product-list.component';
import { DetailProductComponent } from './page/detail-product/detail-product.component';
import { ProductsComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './service/product.service';

@NgModule({
    imports: [
      CommonModule,
      SharedModule
    ],
    declarations: [ProductListComponent, DetailProductComponent, ProductsComponent],
    providers:[ProductService]
  })
  export class ProductsModule { }
  