import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SearchComponent } from './search/search.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard] },
  {
    path: 'products',
    children: [
      { path: 'view', component: ProductViewComponent },
      { path: 'edit', component: ProductEditComponent },
      { path: 'view/:id', component: ProductIdComponent }
    ]
  },
  { path: 'orders/:id/:id2', component: OrderViewComponent },
  { path: 'search', component: SearchComponent },

  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
