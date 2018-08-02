import { Component, OnInit } from '@angular/core';
import { ProductService, Product} from '../../service/product.service';
import { subscribeOn} from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data: Product[] = [];
  loading = false;

  constructor(
    service: ProductService,
  ) {
    this.loading = true;
    service.loadProduct()
    .pipe(
      finalize(() => this.loading = false )
    )
    .subscribe(x => this.data = x, err => console.log(err))
   }

  ngOnInit() {
  }

  addItem(title) {
    for(let i = 0; i < this.data.length; i++)
      {
        if (title === this.data[i].title) {
          this.data[i].cantidad += 1;
          this.data[i].impuesto = this.data[i].price * this.data[i].cantidad * 0.19;
          this.data[i].subtotal = this.data[i].cantidad * this.data[i].price;
        }
      }
  }

  deleteItem(title) {
    for (let i = 0; i < this.data.length; i++) {
        if (title === this.data[i].title && this.data[i].cantidad > 0) {
          this.data[i].cantidad =this.data[i].cantidad - 1;
          this.data[i].impuesto = this.data[i].price * this.data[i].cantidad * 0.19;
          this.data[i].subtotal = this.data[i].cantidad * this.data[i].price;
        }
      }
  }
}
