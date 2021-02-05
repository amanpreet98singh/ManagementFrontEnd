import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'MyFeature', loadChildren: () => import('./my-feature/my-feature.module').then(m => m.MyFeatureModule) }, { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }, { path: 'menu', loadChildren: () => import('./shared/menu/menu.module').then(m => m.MenuModule) }, { path: 'MyFeature', loadChildren: () => import('./features/my-feature/my-feature.module').then(m => m.MyFeatureModule) }, { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, { path: 'invoices', loadChildren: () => import('./features/invoices/invoices.module').then(m => m.InvoicesModule) }, { path: 'customers', loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule) }, { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
