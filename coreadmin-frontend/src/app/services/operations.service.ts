import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private _authService : AuthService, private _dataService: DataService, 
    private _router: Router, private _activeRoute: ActivatedRoute) { }
  
}
