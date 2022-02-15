export class Drink { 
  public id: number;
  public name: string;
  public ice: string;
  public spirit: string;
  public liqueur: string;
  public juice: string;
  public garnish: string;
  public citrus: string;
  public soda: string;
  public special_request: string;
  public photo: string;


  constructor(id: number, name: string, ice: string, spirit: string, liqueur:string, juice: string, garnish: string, citrus: string, soda: string, special_request: string, photo: string) {
    this.id = id;
    this.name = name;
    this.ice = ice;
    this.spirit = spirit;
    this.liqueur = liqueur;
    this.juice = juice;
    this.garnish = garnish;
    this.citrus = citrus;
    this.soda = soda;
    this.special_request = special_request;
    this.photo = photo;
  }
}
