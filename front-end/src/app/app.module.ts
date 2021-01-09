import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {RegisterComponent} from './components/register/register.component';
import {ClientsComponent} from './components/clients/clients.component';
import {ProductsComponent} from './components/products/products.component';
import {ClientOptionsComponent} from './components/client-options/client-options.component';
import {ProductOptionsComponent} from './components/product-options/product-options.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {RouteActivatedService} from './service/route-activated.service';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'client_options', component: ClientOptionsComponent, canActivate: [RouteActivatedService]},
  {path: 'product_options', component: ProductOptionsComponent, canActivate: [RouteActivatedService]},
  {path: 'clients', component: ClientsComponent, canActivate: [RouteActivatedService]},
  {path: 'products', component: ProductsComponent},
  {path: '', component: ProductsComponent},
  {path: '**', component: ProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    ClientsComponent,
    ProductsComponent,
    ClientOptionsComponent,
    ProductOptionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
