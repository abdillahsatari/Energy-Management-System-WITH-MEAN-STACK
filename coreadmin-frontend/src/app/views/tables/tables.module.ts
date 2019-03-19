import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';

@NgModule({
  imports: [
    FormsModule,
    TablesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ TablesComponent ]
})
export class TablesModule { }
