import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string='';
  password: string = '';

  constructor(private http: HttpClient) { }

  public loginWithUsernameAndPassword (username: string, password: string) {
  const url= environment.baseUrl + "/login/";
  const body = {
    "username": this.username,
    "password": this.password
  }
    return lastValueFrom(this.http.post(url,body));
}
}
