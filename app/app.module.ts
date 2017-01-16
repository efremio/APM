import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductListConponent} from './products/product-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    ProductListConponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
