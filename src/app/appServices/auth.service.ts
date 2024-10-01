import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from "../config";
import { AuthResponse } from '../appInterface/auth-response-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http:HttpClient) { }


  signUp(email:any,password:any){
    const payload = {
      email:email,
      password:password,
      returnSecureToken:true
    }
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`,payload);
  }

  signIn(email:any,password:any){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`,{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}
