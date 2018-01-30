import {Osiguranik} from "./osiguranik";
import {Polisa} from "./polisa";
export class Faktura {

  public id : number;
  public osiguranik : Osiguranik = new Osiguranik();
  public polisa : Polisa = new Polisa();

}
