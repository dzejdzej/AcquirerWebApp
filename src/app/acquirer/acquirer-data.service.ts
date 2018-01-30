import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { CompletePaymentDTO } from '../beans/completePaymentDTO';



@Injectable()
export class AcquirerDataService {


  private url = 'https://localhost:8085/';

  constructor(private http:Http) { }

 public getPaymentInfo(id: number) {
     return this.http.get(this.url+'acquirerMain/getPaymentInfo/'+id);
  }

  
   public completePayment(completePaymentDTO : CompletePaymentDTO) {
     const headers = new Headers();
     headers.append('Content-Type' , 'application/json');
    
     return this.http.post(this.url + 'acquirerMain/completePayment', JSON.stringify(completePaymentDTO), {headers : headers});
   }
}
