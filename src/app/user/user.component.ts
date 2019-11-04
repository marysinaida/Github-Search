import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  username: string ='marysinaida'

  constructor(private userService:UserService) {
    this.userService.getUserInfo().subscribe(user =>{
      console.log(user)
      
    });
   }

  ngOnInit() {
  }

}
