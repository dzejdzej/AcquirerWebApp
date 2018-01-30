import {Osoba} from "./osoba";
import {Polisa} from "./polisa";
import {Marka} from "./marka";
import {Model} from "./model";
export class Vozilo {

  public id : number;
  public godProizvodnje : Date = new Date();
  public regTablice : number;
  public brSasije : number;
  public osoba : Osoba = new Osoba();
  public polisa : Polisa = new Polisa();
  public marka : Marka = new Marka();
  public model : Model = new Model();
  public jeVlasnik : boolean = true;

}
