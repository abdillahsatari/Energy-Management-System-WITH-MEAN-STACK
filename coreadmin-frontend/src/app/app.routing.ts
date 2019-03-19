import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
// import { LoginComponent } from './views/login/login.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule',
        //canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        //canActivate: [AuthGuard]
      },
      {
        path:'floor1',
        loadChildren:'./views/floor/floor1/floor1.module#Floor1Module',
        //canActivate: [AuthGuard]
      },
      {
        path:'floor2',
        loadChildren:'./views/floor/floor2/floor2.module#Floor2Module',
        //canActivate: [AuthGuard]
      },
      {
        path:'floor3',
        loadChildren:'./views/floor/floor3/floor3.module#Floor3Module',
        //canActivate: [AuthGuard]
      },
      {
        path: 'user',
        loadChildren: './views/user/user.module#UserModule',
        //canActivate: [AuthGuard]
      },
      {
        path: 'tables',
        loadChildren: './views/tables/tables.module#TablesModule',
        //canActivate: [AuthGuard]
      },
      {
        path: 'config',
        loadChildren: './views/config/config.module#ConfigModule',
        //canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
