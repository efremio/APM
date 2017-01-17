import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListConponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule //we register the http service in the root module
  ],
  declarations: [
    AppComponent,
    ProductListConponent,
    ProductFilterPipe,
    StarComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
