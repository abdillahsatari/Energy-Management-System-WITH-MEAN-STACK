import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ConfigComponent } from './config.component';
import { ConfigRoutingModule } from './config-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ConfigRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ConfigComponent ]
})
export class ConfigModule { }
