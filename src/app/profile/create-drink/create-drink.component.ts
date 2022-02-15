import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-drink',
  templateUrl: './create-drink.component.html',
  styleUrls: ['./create-drink.component.css']
})
export class CreateDrinkComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  OnCreateDrink(drinkData: {
   name: string;
   ice: string;
   spirit: string;
   liqueur: string;
   juice: string;
   garnish: string;
   citrus: string;
   soda: string;
   special_request: string;
   photo: string;
  }){
    this.http.post('http://buildyobar.herokuapp.com/drinks/', drinkData).subscribe(res => {
      console.log(res)
    })
  }

}
