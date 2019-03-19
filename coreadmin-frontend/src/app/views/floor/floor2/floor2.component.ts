import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Data } from '../../../models/data.model';
import { DataService } from '../../../services/data.service';


@Component({
  templateUrl: 'floor2.component.html'
})
export class Floor2Component implements OnInit {

  data : Data [];
  constructor(private router: Router, private _dataService: DataService) { }

  ngOnInit(){
  	this.fetchDataItem();
  }

   fetchDataItem(){
    this._dataService.getData().subscribe((data: Data[]) =>{
        this.data = data;
        // u can use this too
        // this._dataService.getData().subscribe((data: Data[]) =>{
        // this.dataItem = data;
        console.log('fetching ...');
        console.log(this.data);
      }//,
      // err => {
      //   if (err instanceof HttpErrorResponse){
      //     if (err.status === 401){
      //       this.router.navigate(['/dashboard'])
      //     }
      //   }
      // }
      )
  } 

  chosenRoom(room){
    const toService = this.router.navigate([`${room}`]);
    // /floor/room-hall/${room}
  }
}
