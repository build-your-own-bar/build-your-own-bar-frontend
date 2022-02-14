import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink.model';
@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css']
})
export class DrinkCardComponent implements OnInit {
  drinks: Drink[] = [
    new Drink(
    'Manhattan',
    'on the rocks',
    'Bulleit Bourbon',
    'bitters',
    'none',
    'orange peel, maraschino cherry',
    'none',
    'none',
    'double shot',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/13/0/ED0309H_classic-manhattan-cocktail_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614573383.jpeg'),
    new Drink(
    'Old Fashioned',
    'on the rocks',
    'Bulleit Bourbon',
    'bitters',
    'none',
    'orange peel, maraschino cherry',
    'none',
    'none',
    'double shot',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/13/0/ED0309H_classic-manhattan-cocktail_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614573383.jpeg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
