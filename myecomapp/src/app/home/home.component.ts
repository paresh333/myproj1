import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService,private data2:DataService) { }
  posts:Object;
  demodata:Object;

  ngOnInit() {
    this.data.getPosts().subscribe(data =>{
      this.posts =data
      console.log(this.posts)
    })

    this.data2.getdemo().subscribe(data2 =>{
      this.demodata =data2
      console.log(this.demodata)
    })

  }

}
