import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username: string='';
password: string = '';

constructor(private http: HttpClient) {
  
}
ngOnInit(): void {

}

async login(){
try {
let resp = await this.loginWithUsernameAndPassword(this.username, this.password)
  // TODO: Redirect
} catch(e) {
  // Show error message
console.error(e);
}
}

loginWithUsernameAndPassword (username:string, password:string) {
  const url= environment.baseUrl + "/login/";
  const body = {
    "username": this.username,
    "password": this.password
  }
    return lastValueFrom(this.http.post(url,body));
}


}

