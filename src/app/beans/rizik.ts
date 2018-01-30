import {TipRizika} from "./tipRizlika";
import {StavkaCenovnik} from "./stavkaCenovnik";
export class Rizik {

  public id : number;
  public vrednost : string;
  public tipRizik : TipRizika = new TipRizika();
  public stavkaCenovnik : StavkaCenovnik = new StavkaCenovnik();

}
