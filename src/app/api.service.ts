import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchstudent=()=>
  {
    return this.http.get("http://localhost:8080/viewall")
  }
  addstudent=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  searchstudent=(data:any)=>
  {
    return this.http.post("http://localhost:8080/search",data)
  }
  deletestudent=(datatodelete:any)=>
{
  return this.http.post("http://localhost:8080/delete",datatodelete)
}
}
