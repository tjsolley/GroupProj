import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AmericanoComponent } from './americano/americano.component';
import { CoffeeBeansComponent } from './coffee-beans/coffee-beans.component';
import { EspressoComponent } from './espresso/espresso.component';
import { FrappuccinoComponent } from './frappuccino/frappuccino.component';
import { MacchiatoComponent } from './macchiato/macchiato.component';
import { RegularCoffeeComponent } from './regular-coffee/regular-coffee.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            name: 'Home'
        }
    },
    {
        path: 'cart',
        component: CartComponent,
        data: {
            name: 'Cart'
        }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {
            name: 'Contact'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            name: 'Login'
        }
    },
    {
        path: 'americano',
        component: AmericanoComponent,
        data: {
            name: 'Americano'
        }
    },
    {
        path: 'coffee-beans',
        component: CoffeeBeansComponent,
        data: {
            name: 'Coffee-beans'
        }
    },
    {
        path: 'espresso',
        component: EspressoComponent,
        data: {
            name: 'Espresso'
        }
    },
    {
        path: 'frappuccino',
        component: FrappuccinoComponent,
        data: {
            name: 'Frappuccino'
        }
    },
    {
        path: 'macchiato',
        component: MacchiatoComponent,
        data: {
            name: 'Macchiato'
        }
    },
    {
        path: 'regular-coffee',
        component: RegularCoffeeComponent,
        data: {
            name: 'Regular-coffee'
        }
    },
];

export const routerModule = RouterModule.forRoot(routes);
