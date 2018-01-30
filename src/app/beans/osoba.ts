export class Osoba{
  public id : number;
  public ime : string;
  public prezime : string;
  public jmbg : string;
  public adresa : string;
  public brojTelefona : string;
  public brojPasosa : string;
  public datumRodjenja : Date = new Date();
  public email:string;
}

export enum TipNosioca{
  OSIGURANIK,
  DRUGO_LICE
}
