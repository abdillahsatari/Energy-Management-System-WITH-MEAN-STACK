import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Data } from '../models/data.model';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	dataObject : Data [];
	// private _dataUrl = "http://localhost:3600/datahandler"
	// private _thingspeakclient = "http://3600/thingspeakClient";
	private _dataUri = "/datahandler";

  constructor(private http: HttpClient) { }

  	// checkNetwork():Observable<any>{
  	// 	return this.http.get(`${this._dataUri}/fetch`)
  	// 	.catch(
  	// 		this.handleError)
  	// }
	getData(){
		return this.http.get(`${this._dataUri}/fetch`);
	}

	getRoomById(room):Observable<any>{
		return this.http.get(`${this._dataUri}/fetchroom/${room}`)
		.catch(
			this.handleError)
	}

	getDataById(id){
		return this.http.get(`${this._dataUri}/fetch/${id}`);
	}

	addData(status){
		const newData = {
			status : String
		};
		return this.http.post<any>(this._dataUri, newData)
	}

	addCurrentState(node, pin, status):Observable<any>{
		const newData = {
			node : node,
			pin : pin,
			status : status
		};
		return this.http.post<any>(`${this._dataUri}/thingspeakPost`, newData)
		.catch(
			this.handleError)
	}

	updateData(id, status):Observable<any>{
		const updateData = {
			status : status
		}
		return this.http.post<any>(`${this._dataUri}/update/${id}`, updateData)
		.catch( 
			this.handleError)
	}

	deleteData(id){
		return this.http.get(`${this._dataUri}/delete/${id}`);
	}

	private handleError(error:HttpErrorResponse){
		return Observable.throw("tidak terhubung ke jaringan " + error.message || "error cooy");
	}
}
