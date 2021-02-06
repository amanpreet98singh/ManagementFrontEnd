import { NgModule } from '@angular/core';

import { InvoicesCreateRoutingModule } from './invoices-create-routing.module';
import { InvoicesCreateComponent } from './invoices-create.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [InvoicesCreateComponent],
  imports: [
    InvoicesCreateRoutingModule,
    SharedModule
  ]
})
export class InvoicesCreateModule { }
