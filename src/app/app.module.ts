import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { AppRouting } from './app.routing';
import { MatModule } from './shared/mat.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRouting,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
