import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {
  drinkList: any=[];
  id: any='';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(){
    this.fetchDrinks();
  }

  private fetchDrinks(){
    this.http
    .get('http://buildyobar.herokuapp.com/drinks/')
    .subscribe(res => {
      this.drinkList = res;
      console.log(this.drinkList)
      var id = this.route.snapshot.paramMap.get('id');
      console.log(id)
      this.id = id
      return id;
      //if this.id == drinkList.id
      //return this index
    })
    this.http
    .get(`http://buildyobar.herokuapp.com/drinks/${this.id}`)
    .subscribe(res => {
     console.log(res)
    })
  }
}
