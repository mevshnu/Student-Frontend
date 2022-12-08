import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  admno=""
  searchdata:any=[]
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data ={ "admno":this.admno}
    console.log(data)
    this.api.searchstudent(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0 ) {
          alert("invalid admission code")
          
        } else 
        {
          this.searchdata = response;
        }
      }
    )
  }
  deletebtnclick=(id:any)=>
  {
    let data :any={"id":id}
    this.api.deletestudent(data).subscribe(
      (generate:any)=>
      {
        console.log=generate;

      }
    )
  }

}
