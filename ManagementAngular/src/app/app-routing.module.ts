import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'MyFeature', loadChildren: () => import('./my-feature/my-feature.module').then(m => m.MyFeatureModule) }, { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }, { path: 'menu', loadChildren: () => import('./shared/menu/menu.module').then(m => m.MenuModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
