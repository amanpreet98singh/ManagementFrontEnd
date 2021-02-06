import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesCreateComponent } from './invoices-create.component';

const routes: Routes = [{ path: '', component: InvoicesCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesCreateRoutingModule { }
