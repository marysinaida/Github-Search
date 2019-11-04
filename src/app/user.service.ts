import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
username:string;
repo :string ="Recite-app"
 
constructor(private http:HttpClient) { 
  console.log("service is now ready!")
  this.username = "marysinaida";
}
getUser(){
  return this.http.get ("https://api.github.com/users/" + this.username,({
    headers: new HttpHeaders({authorization:'token'+ environment.apiKey})
  }))
  
}
}
