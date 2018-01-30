import { VrstaPlacanja } from './../components/enums/vrstaPlacanja.enum';
import {Osoba} from "./osoba";
import {Vozilo} from "./vozilo";
import {Nekretnina} from "./nekretnina";
import {Osiguranik} from "./osiguranik";
export class OsiguranjeDTO {

  public osiguranici : Osiguranik[] = [];
  public nosilac : Osoba = new Osoba();
  public nosilacJeOsiguranik : boolean;
  public vozila : Vozilo[] = [];
  public nekretnine : Nekretnina[] = [];
  public destinacija : string;
  public pocetakOsiguranja : Date = new Date();
  public svrhaOsiguranja : string;
  public trajanjeOsiguranja : number;
  public emailNosioca : string;
  public vrstaPlacanja : VrstaPlacanja; 

}
