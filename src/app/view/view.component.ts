import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  data:any=[]
  constructor(private api:ApiService)
  {
    api.fetchstudent().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }

}
