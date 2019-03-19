import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from '../../auth.guard';

import { Floor3Component } from './floor3.component';
import { RoomMeetingComponent } from './room-meeting.component';
import { RoomCoridorComponent } from './room-coridor.component';
import { RoomMeetingBComponent } from './room-meeting-b.component';
import { RoomDeanComponent } from './room-dean.component';
import { RoomGlassComponent } from './room-glass.component';
import { RoomHallComponent } from './room-hall.component';
import { RoomMusollahComponent } from './room-musollah.component';
import { RoomSecretarySenatComponent } from './room-secretary-senat.component';
import { RoomSecretaryComponent } from './room-secretary.component';
import { RoomStafComponent } from './room-staf.component';
import { RoomToiletMComponent } from './room-toilet-m.component';
import { RoomToiletWComponent } from './room-toilet-w.component';
import { RoomViceDean1Component } from './room-vicedean1.component';
import { RoomViceDean2Component } from './room-vicedean2.component';
import { RoomViceDean3Component } from './room-vicedean3.component';
import { RoomViceDean4Component } from './room-vicedean4.component';
import { RoomWaitingComponent } from './room-waiting.component';

const routes: Routes = [
  {
    path: '',
    component : Floor3Component,
    data: {
      title: 'Main Floor'
    }
},
    // children : [
        // {
        //     path :'',
        //     component : Floor3Component,
        //     data:{
        //         title:'Main Floor'
        //     }
        //     //canActivate: [AuthGuard]
        // },
    	{
    		path :'coridor/:room',
    		component : RoomCoridorComponent,
    		data:{
    			title:'Coridor'
    		}
    	},
    	{
    		path : 'meeting-room-a/:room',
    		component: RoomMeetingComponent,
    		data:{
    			title:'Meeting Room A'
    		}
    	},
        {
            path : 'meeting-room-b/:room',
            component: RoomMeetingBComponent,
            data:{
                title:'Meeting Room B'
            }
        },
        {
            path : 'room-dean/:room',
            component: RoomDeanComponent,
            data:{
                title:'Dean Room'
            }
        },
        {
            path : 'room-glass/:room',
            component: RoomGlassComponent,
            data:{
                title:'Hall Room'
            }
        },
        {
            path : 'room-hall/:lantai',
            component: RoomHallComponent,
            data:{
                title:'Hall Room'
            }
        },
        {
            path : 'room-musollah/:room',
            component: RoomMusollahComponent,
            data:{
                title:'Musollah'
            }
        },
        {
            path : 'room-secretary-senat/:room',
            component: RoomSecretarySenatComponent,
            data:{
                title:'Secretary Of Senat'
            }
        },
        {
            path : 'room-secretary/:room',
            component: RoomSecretaryComponent,
            data:{
                title:'Secretary Of Dean'
            }
        },
        {
            path : 'room-staf/:room',
            component: RoomStafComponent,
            data:{
                title:'Staf Room'
            }
        },
        {
            path : 'room-toilet-m/:room',
            component: RoomToiletMComponent,
            data:{
                title:'Toilet Man'
            }
        },
        {
            path : 'room-toilet-w/:room',
            component: RoomToiletWComponent,
            data:{
                title:'Toilet Woman'
            }
        },
        {
            path : 'room-vicedean1/:room',
            component: RoomViceDean1Component,
            data:{
                title:'Vice Dean 1'
            }
        },
                {
            path : 'room-vicedean2/:room',
            component: RoomViceDean2Component,
            data:{
                title:'Vice Dean 2'
            }
        },
                {
            path : 'room-vicedean3/:room',
            component: RoomViceDean3Component,
            data:{
                title:'Vice Dean 3'
            }
        },
        {
            path : 'room-vicedean4/:room',
            component: RoomViceDean4Component,
            data:{
                title:'Vice Dean 4'
            }
        },
        {
            path : 'room-waiting/:room',
            component: RoomWaitingComponent,
            data:{
                title:'Dean Waiting Room'
            }
        }
    ];
  // }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Floor3RoutingModule {}
