import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { routerModule } from './routes';
import { AmericanoComponent } from './americano/americano.component';
import { CoffeeBeansComponent } from './coffee-beans/coffee-beans.component';
import { EspressoComponent } from './espresso/espresso.component';
import { FrappuccinoComponent } from './frappuccino/frappuccino.component';
import { MacchiatoComponent } from './macchiato/macchiato.component';
import { RegularCoffeeComponent } from './regular-coffee/regular-coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    CartComponent,
    HomeComponent,
    AmericanoComponent,
    CoffeeBeansComponent,
    EspressoComponent,
    FrappuccinoComponent,
    MacchiatoComponent,
    RegularCoffeeComponent,
  ],
  imports: [
    BrowserModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
