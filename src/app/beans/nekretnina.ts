import {Osoba} from "./osoba";
import {Polisa} from "./polisa";
export class Nekretnina {

  public id : number;
  public osoba : Osoba = new Osoba();
  public polisa : Polisa = new Polisa();

}
