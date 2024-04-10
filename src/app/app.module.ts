import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CardOrderComponent } from './component/card-order/card-order.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { ProductComponent } from './pages/product/product.component';
import { PedidosRecenteComponent } from './component/pedidos-recente/pedidos-recente.component';
import { BodyComponent } from './component/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardOrderComponent,
    SideBarComponent,
    ProductComponent,
    PedidosRecenteComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    
  ],
  exports: [
    CardOrderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
