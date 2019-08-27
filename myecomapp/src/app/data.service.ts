import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }
   
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getdemo(){
    return this.http.post('http://localhost:3000/testapi',"")
  }

}



