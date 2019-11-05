import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { observable, Observable} from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  returnRepo(searchTerm: string) {
    // throw new Error("Method not implemented.");
  }
  // private username: string;
  // private repo: string = "Recite-app"
  private clientid = '8952478ea98c98d09ded';
  private clientsecret = '1e1b16f9cd757bf3c6580865f681b738fecacf61';


  constructor(private http: HttpClient) { 
    
}

  returnrepo(searchTerm:string):Observable<any>{
    return this.http.get("https://api.github.com/users/" + searchTerm + "/repos?" + this.clientid + this.clientsecret)
  }
}
