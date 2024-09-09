import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path:'register',
        component: RegisterComponent
    }, 

    {
        path: 'product-details/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'cart',
        component : CartComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
