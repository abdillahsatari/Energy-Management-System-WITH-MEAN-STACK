// import { NavigationService } from './navigation.service';

export const navItems = //if (condition) {
  // code...
//}

 [
  {
    divider: true
  },
  {
    title: true,
    name: 'Controls',
    variant: 'primary'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart',
  },
  {
    name: 'Tables',
    url: '/tables',
    icon: 'icon-puzzle'
  }
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Users',
  //   class:'mt-3',
  // },
  // {
  //   name: 'Profile',
  //   url: '/user',
  //   icon: 'icon-user'
  // },
  // {
  //   name: 'Setting',
  //   url: '/config',
  //   icon: 'icon-wrench'
  // },
  // {
  //   name: 'Logout',
  //   url: '/logout',
  //   icon: 'icon-power'
  // }
];
