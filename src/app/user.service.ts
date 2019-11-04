import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private repo: string = "Recite-app"
  private clientid = '8952478ea98c98d09ded';
  private clientsecret = '1e1b16f9cd757bf3c6580865f681b738fecacf61';

  constructor(private http: HttpClient) {
    console.log("service is now ready!")
    this.username = "marysinaida";
    this.clientid + "&client_secret"
  }
  getUserInfo() {
    return this.http.get( "https://api.github.com/users/" + this.username +"?client_id=" + this.clientid +"&client_secret=" + this.clientsecret);
  } 
}    
      headers: new HttpHeaders({ authorization: 'token' + environment.apiKey })
    
  