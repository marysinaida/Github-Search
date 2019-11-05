import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  
  userrepo:[];


  constructor(private servicerepo:RepoService) { }

  returnRepo(searchTerm:string){
    // this.servicerepo.returnRepo(searchTerm).(data=>{
    //   this.userrepo=data;
    //   return(this.userrepo)
    // })
  }

  ngOnInit() {
    this.returnRepo('marysinaida')
  }

}
