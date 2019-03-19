import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {SwUpdate} from '@angular/service-worker';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  update:boolean=false;

  constructor(private router: Router, updates:SwUpdate) { 
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());

    })


  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
