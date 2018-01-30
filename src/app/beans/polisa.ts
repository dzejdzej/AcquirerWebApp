import {Osiguranik} from "./osiguranik";
import {Osiguravac} from "./osiguravac";
export class Polisa {

  public id : number;
  public od : Date = new Date();
  public doo : Date = new Date();
  public brOsoba : number;
  public email : string;
  public osiguranici : Osiguranik[] = [];
  public osiguravac : Osiguravac = new Osiguravac();

}
