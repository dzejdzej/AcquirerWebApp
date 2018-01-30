import {Osoba, TipNosioca} from "./osoba";
export class Nosilac{
  public osoba:Osoba;
  public tip:TipNosioca;

  constructor(osoba:Osoba, tipNosioca:TipNosioca){
      this.osoba = osoba;
      this.tip = tipNosioca;
  }
}
