import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_uri = 'http://localhost:8010/api/etu';

  constructor(private logService:LoggingService,
    private http:HttpClient) { }
  loginIn(user :any) {
    this.logService.log(user.pseudo,"connexion");
    return this.http.post(this.base_uri+"/login", user);//next : creation user class

  }
}
