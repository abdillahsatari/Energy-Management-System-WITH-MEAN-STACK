import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from '../../auth.guard';

import { Floor2Component } from './floor2.component';
// import { RoomMeetingComponent } from './room-meeting.component';
// import { RoomCoridorComponent } from './room-coridor.component';
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

const routes: Routes = [
  {
    path: '',
    component : Floor2Component,
    data: {
      title: 'Floor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Floor2RoutingModule {}
