import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private userServise:UserService) {
    this.userServise.getUser().subscribe(user =>{
      console.log(user);
      this.users = user;
    });
   }

  ngOnInit() {
  }

}
