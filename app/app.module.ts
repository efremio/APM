import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule, //we register the http service in the root module
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  declarations: [ //the list of components that belongs to this module
    AppComponent,
    WelcomeComponent
    ],
  bootstrap: [ AppComponent ] //when the app launches, it displays this component insude the pm-app tag of index.html
})

export class AppModule { }
