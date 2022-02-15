import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'byob';
  drinkList: any=[];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.fetchDrinks();
  }

  private fetchDrinks(){
    this.http
    .get('http://buildyobar.herokuapp.com/drinks/')
    .subscribe(res => {
      this.drinkList = res;
      console.log(this.drinkList)
    })
  }



}
