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
    0,
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
    1,
    'Old Fashioned',
    'on the rocks',
    'Bulleit Bourbon',
    'bitters',
    'none',
    'orange peel, maraschino cherry',
    'none',
    'none',
    'triple shot',
    'https://www.liquor.com/thmb/lavmUGaMMriZPSxfHsPnyK15bSY=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
