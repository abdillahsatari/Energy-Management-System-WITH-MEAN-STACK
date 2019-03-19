import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { Floor2Component } from './floor2.component';
// import { RoomCoridorComponent } from './room-coridor.component';
// import { RoomMeetingComponent } from './room-meeting.component';
// import { RoomMeetingBComponent } from './room-meeting-b.component';
// import { RoomDeanComponent } from './room-dean.component';
// import { RoomGlassComponent } from './room-glass.component';
// import { RoomHallComponent } from './room-hall.component';
// import { RoomMusollahComponent } from './room-musollah.component';
// import { RoomSecretarySenatComponent } from './room-secretary-senat.component';
// import { RoomSecretaryComponent } from './room-secretary.component';
// import { RoomStafComponent } from './room-staf.component';
// import { RoomToiletMComponent } from './room-toilet-m.component';
// import { RoomToiletWComponent } from './room-toilet-w.component';
// import { RoomViceDean1Component } from './room-vicedean1.component';
// import { RoomViceDean2Component } from './room-vicedean2.component';
// import { RoomViceDean3Component } from './room-vicedean3.component';
// import { RoomViceDean4Component } from './room-vicedean4.component';
// import { RoomWaitingComponent } from './room-waiting.component';


import { Floor2RoutingModule } from './floor2-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthService } from './auth.service';
// import { AuthGuard } from './auth.guard';
// import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TabsModule,
    Floor2RoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ 
  Floor2Component, 
  // RoomCoridorComponent, 
  // RoomMeetingComponent,
  // RoomMeetingBComponent,
  // RoomDeanComponent,
  // RoomGlassComponent,
  // RoomHallComponent,
  // RoomMusollahComponent,
  // RoomSecretaryComponent,
  // RoomStafComponent,
  // RoomToiletMComponent,
  // RoomToiletWComponent,
  // RoomSecretarySenatComponent,
  // RoomViceDean1Component,
  // RoomViceDean2Component,
  // RoomViceDean3Component,
  // RoomViceDean4Component,
  // RoomWaitingComponent,
  // Floor1ComponentComponent
  ]
})

export class Floor2Module { }
