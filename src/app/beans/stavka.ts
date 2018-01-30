import {Faktura} from "./faktura";
import {Rizik} from "./rizik";
export class Stavka {

  public id : number;
  public faktura : Faktura = new Faktura();
  public rizik : Rizik = new Rizik();

}
