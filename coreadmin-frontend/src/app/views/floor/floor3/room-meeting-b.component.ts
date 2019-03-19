import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Floor3Component } from './floor3.component';
import { AuthService } from '../../../services/auth.service';
import { DataService } from '../../../services/data.service';
import { Data } from '../../../models/data.model';

@Component({
  templateUrl: 'room-meeting-b.component.html'
  
})
export class RoomMeetingBComponent implements OnInit, OnDestroy {
  room: String;
  datastatus: any = {};
  storeToLocal: any = {};
  storeCommandLocal: any = {};
  interval : any ;

  constructor(private _authService : AuthService, private _dataService: DataService, private _router: Router, private _activeRoute: ActivatedRoute) { 
  }

  ngOnInit(){
      this.fetchDataItem();
      this.interval = setInterval(() => { 
        // this.fetchDataItem();
        this.sendOfflineData(); 
    }, 10000);      
  }

   ngOnDestroy(){
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  sendOfflineData(){
    let state = JSON.parse(localStorage.getItem("offline"));
    let command = JSON.parse(localStorage.getItem("offlineCommand"));
    console.log("state offline: ", state);
    console.log("command offline: ", command);

    if (state || command) {
      // console.log("ada state offline");
      let id = state[0]._id;
      let time = state[0].waktu;
      let statusId = state[0].status;
      let attribute = state[0].attr;

      let node_id = command[0].node_id;
      let pin_id = command[0].pin_id;
      let status_id = command[0].status;

      this._dataService.updateData(id, statusId).subscribe((res) =>{
              res = console.log(res);
              localStorage.removeItem('offline');
            }, (error)=>{
              error = console.log("ada state offline");
            })

      this._dataService.addCurrentState(node_id, pin_id, status_id).subscribe((res) =>{
              res = console.log(res);
              // content.setAttribute('class',"");
              console.log("item_Off");
              localStorage.removeItem('offlineCommand');
            }, (error)=>{
              error = console.log("ada command offline");
            })
      this.fetchDataItem();
    }else{
      console.log("tidak ada state & command offline");
      this.fetchDataItem();
    }
  }

  fetchDataItem(){
    // get data using parameters binding
    let content1 = document.getElementById("lampOne");
    let content2 = document.getElementById("lampTwo");
    let content3 = document.getElementById("ac");

     this._activeRoute.params.subscribe(params => {
      this.room=params.room;
      this._dataService.getRoomById(this.room).subscribe(res => {
        this.datastatus = res;

        console.log('Data Fetching..');
        console.log(this.datastatus);

      // check the data and give a class active if the data is 1 to change the color
      if (this.datastatus[0].status == "1"){
          content1.setAttribute('class','active');
          console.log("lamp_1_On");
         }
         else{
          content1.setAttribute('class',"");
          console.log("lamp_1_Off")
         }   

          // check the data and give a class active if the data is 1 to change the color
      if (this.datastatus[1].status == "1"){
          content2.setAttribute('class','active');
          console.log("lamp_2_On");
         }
         else{
          content2.setAttribute('class',"");
          console.log("lamp_2_Off")
         }  

          // check the data and give a class active if the data is 1 to change the color
      if (this.datastatus[2].status == "1"){
          content3.setAttribute('class','active');
          console.log("Ac_On");
         }
         else{
           content3.setAttribute('class',"");
            console.log("Ac_Off")
         }  
         // endOfIF
      });
    });  
  } 
  
  activateItem(array, attr){
    if(this._authService.loggedIn()){
        // document.getElementById("ac").setAttribute("fill", "yellow");
        var content=document.getElementById(attr);

        //  this._activeRoute.params.subscribe(params => {
        //   this.room=params.room;
        //   this._dataService.getRoomById(this.room).subscribe(res => {
        //     // this.datastatus = res;
        //     // console.log(this.datastatus);
        //   }, (error)=>{
        //     error = console.log(error)
        //   });
        // });
         if (content.getAttribute('class')==('active')) {
          let id = this.datastatus[`${array}`]._id;
          let node_id = this.datastatus[`${array}`].node_id;
          let pin_id = this.datastatus[`${array}`].pin_id;
          let statusId = this.datastatus[`${array}`].status = "0";

          console.log(statusId);
       
          this._dataService.updateData(id, statusId).subscribe((res) =>{
            res = console.log(res);
          }, (bad)=>{
              bad = console.log(bad);
              //store command to localstorage
              this.storeToLocal = [{_id: id, status: statusId, attr: content }];
              console.log(this.storeToLocal);
              localStorage.setItem('offline', JSON.stringify(this.storeToLocal));
          })
          
          this._dataService.addCurrentState(node_id, pin_id, statusId).subscribe((res) =>{
            res = console.log(res);

            content.setAttribute('class',"");
            console.log("item_Off")
          }, (bad)=>{
            bad = console.log(bad);
            this.storeCommandLocal = [{node_id: node_id, pin_id: pin_id, status: statusId }];
            console.log(this.storeCommandLocal);
            localStorage.setItem('offlineCommand', JSON.stringify(this.storeCommandLocal));
          })
        }else{
          // let active = content.setAttribute("fill", "yellow");
              let id = this.datastatus[`${array}`]._id;
              let node_id = this.datastatus[`${array}`].node_id;
              let pin_id = this.datastatus[`${array}`].pin_id;
              let statusId = this.datastatus[`${array}`].status = "1";
              console.log(statusId);

              this._dataService.updateData(id, statusId).subscribe((res) =>{
                res = console.log(res);
              }, (bad)=>{
                 bad = console.log(bad);
                 //store command to localstorage
                 this.storeToLocal = [{_id: id, status: statusId, attr: content }];
                 console.log(this.storeToLocal);
                 localStorage.setItem('offline', JSON.stringify(this.storeToLocal));
              })
              
              this._dataService.addCurrentState(node_id, pin_id, statusId).subscribe((res) =>{
                res = console.log(res); 

                content.setAttribute('class','active');
                console.log("item_On");
              }, (bad)=>{
                  bad = console.log(bad);
                  this.storeCommandLocal = [{node_id: node_id, pin_id: pin_id, status: statusId }];
                  console.log(this.storeCommandLocal);
                  localStorage.setItem('offlineCommand', JSON.stringify(this.storeCommandLocal));
              })           
          }  
    }
  }
}
