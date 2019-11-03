import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hub-form',
  templateUrl: './hub-form.component.html',
  styleUrls: ['./hub-form.component.css']
})
export class HubFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>()

  searchTerm:string;  
  constructor() { }
  search(){
    this.emitSearch.emit(this.searchTerm);
  }



  ngOnInit() {
  }

}
