import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl=`https://expensetrackerbackend-production-b406.up.railway.app`
  constructor(private http :HttpClient) { }

  register(credential:any ):Observable<any>{
    return this.http.post(`${this.baseurl}/reg`,credential)
  }

  login(credential:any):Observable<any>{
   return this.http.post(`${this.baseurl}/log`,credential)
  }
} 
