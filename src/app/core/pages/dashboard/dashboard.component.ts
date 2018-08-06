import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService, Product } from '../../../products/service/product.service';
import { finalize } from 'rxjs/internal/operators/finalize';
import { MatModule } from '../../../shared/mat.module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public data: Product[] = [];
  public sumatoria: any = 0;
  public sumatotal: any = 0;
  public sumaimpuesto: any = 0;
  loading: Boolean = false;
  public selectedEmoji: string;


  constructor(
    private breakpointObserver: BreakpointObserver,
    service: ProductService,
 
  ) {
    this.loading = true;
    service.loadProduct()
    .pipe(
      finalize(() => this.loading = false )
    )
    .subscribe(x => this.data = x, err => console.log(err))
   }

isPhone: Observable<boolean> = this.breakpointObserver
.observe(Breakpoints.HandsetPortrait)
.pipe(
  map(x => x.matches)
);
  // constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
  }

  factura() {
    let show: any = '\n';
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].cantidad > 0) {
        show = show + this.data[i].cantidad + ' de: ' + this.data[i].title + ' a  $ ' + this.data[i].subtotal + '\n';
      }
    }
    alert(show + '\n' + 'Total Impuestos: $' + this.sumimpuesto() + '\n' + 'Total a Pagar: $' + this.sumtotal());
    this.clear();
  }

  clear() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].cantidad = 0;
      this.data[i].impuesto = 0;
      this.data[i].subtotal = 0;
    }
  }

  sumtotal() {
    this.sumatotal = 0;
    for (let i = 0; i < this.data.length; i++) {
      this.sumatotal = this.data[i].subtotal + this.sumatotal;
    }
    return this.sumatotal;
  }

  sumimpuesto() {
    this.sumaimpuesto = 0;
    for (let i = 0; i < this.data.length; i++) {
      this.sumaimpuesto = this.data[i].impuesto + this.sumaimpuesto;
    }
    return this.sumaimpuesto;
  }
}
