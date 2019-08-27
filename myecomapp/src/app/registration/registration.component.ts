import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }
  response:Object
  ngOnInit() {
     
   }

  register(form) {

    this.http.post('http://localhost:3000/form',form.value)
    .subscribe(data => {
      this.response=data
      console.log(data);
    });
  }


}
