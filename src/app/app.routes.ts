import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './core/layout/dashboard/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './core/layout/auth/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layout/blank/blank-layout/blank-layout.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { HomeComponent } from './features/blank/pages/home/home.component';
import { ProductsComponent } from './features/blank/pages/products/products.component';
import { CategoriesComponent } from './features/blank/pages/categories/categories.component';
import { CartComponent } from './features/blank/pages/cart/cart.component';
import { OrdersComponent } from './features/blank/pages/orders/orders.component';
import { WishlistComponent } from './features/blank/pages/wishlist/wishlist.component';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { UsersComponent } from './features/dashboard/pages/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },

      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ],
  },
];
