import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Drink } from '../drink.model';
@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css']
})
export class DrinkCardComponent implements OnInit {
  drinkList: any=[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
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

  // @Input() ('drinkList') drink: Object = {};
}
