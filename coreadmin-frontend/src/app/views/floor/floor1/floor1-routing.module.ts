import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from '../../auth.guard';

import { Floor1Component } from './floor1.component';
// import { RoomMeetingComponent } from './room-meeting.component';
import { RoomCoridorComponent } from './room-coridor.component';
// import { RoomMeetingBComponent } from './room-meeting-b.component';
// import { RoomDeanComponent } from './room-dean.component';
import { RoomGlassComponent } from './room-glass.component';
import { RoomHallComponent } from './room-hall.component';
import { RoomMusollahComponent } from './room-musollah.component';
import { RoomViceDir3Component } from './room-vicedir-3.component';
// import { RoomSecretaryComponent } from './room-secretary.component';
// import { RoomStafComponent } from './room-staf.component';
import { RoomToiletMComponent } from './room-toilet-m.component';
import { RoomToiletWComponent } from './room-toilet-w.component';
// import { RoomViceDean1Component } from './room-vicedean1.component';
// import { RoomViceDean2Component } from './room-vicedean2.component';
// import { RoomViceDean3Component } from './room-vicedean3.component';
// import { RoomViceDean4Component } from './room-vicedean4.component';
// import { RoomWaitingComponent } from './room-waiting.component';

const routes: Routes = [
  {
    path: '',
    component : Floor1Component,
    data: {
      title: 'Floor'
    }
  },
  {
    path: 'room-vicedir-3/:room',
    component : RoomViceDir3Component,
    data: {
      title: 'Floor'
    }
  },
  {
    path: 'coridor/:room',
    component : RoomCoridorComponent,
    data: {
      title: 'Floor'
    }
  },
   {
    path: 'room-showcase/:room',
    component : RoomGlassComponent,
    data: {
      title: 'Floor'
    }
  },
   {
    path: 'room-hall/:room',
    component : RoomHallComponent,
    data: {
      title: 'Floor'
    }
  },
  {
    path: 'room-mushollah/:room',
    component : RoomMusollahComponent,
    data: {
      title: 'Floor'
    }
  },
  {
    path: 'room-toilet-m/:room',
    component : RoomToiletMComponent,
    data: {
      title: 'Floor'
    }
  },
  {
    path: 'room-toilet-w/:room',
    component : RoomToiletWComponent,
    data: {
      title: 'Floor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Floor1RoutingModule {}
