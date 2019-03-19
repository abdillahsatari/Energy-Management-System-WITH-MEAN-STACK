import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  // providers: [{
  //       provide: HTTP_INTERCEPTORS,
  //       useClass: TokenInterceptorService,
  //       multi: true
  //     }]
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  loginUserData={};
  // userinfo$;
  dataObjek$;

  constructor(public _authService: AuthService, private _router: Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit(){
     if(this._authService.loggedIn()){
       // let retrievedObject = localStorage.getItem('user');
       // retrievedObject = this.dataObjek$;
       // console.log('retrieved: ', JSON.parse(retrievedObject));
       let objek = JSON.parse(localStorage.getItem("user") || "null");
       this.dataObjek$ = objek;
       console.log('local: ', objek);

     }
  }

  loginUser(){
    this._authService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this._router.navigate(['/dashboard'])
        },
        err => console.log(err),
      ),
      this._authService.getUserInfo(this.loginUserData)
      .subscribe(
        res => {
          this.dataObjek$ = res;
          console.log('online: ', this.dataObjek$);
          localStorage.setItem('user', JSON.stringify(this.dataObjek$));
          this._router.navigate(['/dashboard'])
        },
        err => console.log(err),
      )
  }

   logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this._router.navigate(['/dashboard'])
  }
}
