import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name=""
  admno=""
  rollno=""
  college=""
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let stu:any={
      "name":this.name,
      "admno":this.admno,
      "rollno":this.rollno,
      "college":this.college
    }
    console.log(stu)
    this.api.addstudent(stu).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )

  }



}
