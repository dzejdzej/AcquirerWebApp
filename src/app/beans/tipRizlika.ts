import {Kategorija} from "./kategorija";
export class TipRizika {

  public id : number;
  public naziv : string;
  public kategorija : Kategorija = new Kategorija();

}
