import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private _registerUrl = "/auth/register"
	private _loginUrl = "/auth/login"
  private _userInfo = "/auth/userInfo"
  //http://localhost:3600/
  //for server online (heroku) just use
  //auth/login
  
  constructor(private http: HttpClient) { }

  registerUser(user){
  	return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(apakah){
  	return this.http.post<any>(this._loginUrl, apakah)
  }

  getUserInfo(userInfo){
    return this.http.post<any>(this._userInfo, userInfo)
  }

  loggedIn(){
  	return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
