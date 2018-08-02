import { Routes } from '@angular/router';
import { DetailProductComponent } from './page/detail-product/detail-product.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductsComponent} from './product.component';

export const productRoutes: Routes =[
    {
             path:'',component:ProductsComponent, children:[
            {path:'', component:ProductListComponent},
            {path:':id', component:DetailProductComponent}
        ]
    }
]