import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/page/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./features/pages/shop/shop.component').then(m => m.ShopComponent),
  },
  {
    path: 'product/:product',
    loadComponent: () =>
      import('./features/pages/product/product.component').then(
        m => m.ProductComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/pages/about/page/about.component').then(
        m => m.AboutComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/pages/contact/contact.component').then(
        m => m.ContactComponent
      ),
  },
];
