import { CompletePaymentDTO } from './../beans/completePaymentDTO';
import { TransactionDTO } from './../beans/transactionDTO';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AcquirerDataService } from "./acquirer-data.service";

import { StompService } from 'ng2-stomp-service';



@Component({
  selector: 'app-acquirer',
  templateUrl: './acquirer.component.html',
  styleUrls: ['./acquirer.component.css']
})
export class AcquirerComponent implements OnInit {
  private subscription: any;
  private waiting: boolean;

  form = this.fb.group({
    pan: ['', Validators.required],
    securityCode: ['', Validators.required],
    //polje vezano samo za individualno osiguranje
    cardHolderName: ['', Validators.required],
    expirationMonth: ['', Validators.required],
    expirationYear: ['', Validators.required]
  });

  formData: any = { pan: "", securityCode: "", cardHolderName: "", expirationMonth: 0, expirationYear: 0 };
  transactionId: number;
  transactionDTO: TransactionDTO;
  merchantId: string = "";
  amount: string = "";
  vreme: Date;
  constructor(private stomp: StompService, private fb: FormBuilder, private acquirerDataService: AcquirerDataService, private router: Router, private route: ActivatedRoute) {
    stomp.configure({
      host: 'https://localhost:8085/acquirer-ws',
      debug: true,
      queue: { 'init': false }
    });

    //start connection
    stomp.startConnect().then(() => {
      stomp.done('init');
      console.log('connected');

      //subscribe
      this.subscription = stomp.subscribe('/topic/complete-payment', this.response);

      //send data
      stomp.send('destionation', { success: true });

      //unsubscribe
      // this.subscription.unsubscribe();

      //disconnect
      // stomp.disconnect().then(() => {
      //    console.log( 'Connection closed' )
      //  })

    });

  }

  //response
  public response = (odgovor) => {

    console.log(odgovor);
    // let odgovor = JSON.parse(data);
    console.log('ODGOVOR!!!');




    if (odgovor.success) {
      window.location.href = odgovor.successURL;
      //window.location.replace(odgovor.successUrl);
    }
    else if (!odgovor.success && odgovor.reason.indexOf("COMMUNICATION ERROR") === -1) {
      window.location.href = odgovor.failedURL;
      //window.location.replace(odgovor.failedUrl);
    }
    else {
      window.location.href = odgovor.errorURL;
      //   window.location.replace(odgovor.errorUrl);
    }


  }

  ngOnInit() {


    this.route.params.subscribe(params => {

      this.transactionId = +params['id'];// (+) converts string 'id' to a number

      this.acquirerDataService.getPaymentInfo(this.transactionId).subscribe(
        (data) => {
          console.log('USAO');
          this.transactionDTO = JSON.parse(data['_body']);
          this.merchantId = this.transactionDTO.merchant.idMerchant;
          this.amount = this.transactionDTO.amount;
          this.vreme = new Date(this.transactionDTO.vreme);pay
          console.log('TRANSACTIONDTO!!!!!!!!!!!!!!!');
          console.log(this.transactionDTO);
        });

    }, error => console.log("fail", error));

    // this.route.params.subscribe((params: Params) => {
    //   let userId = params['id'];
    //   console.log(userId, "kekekekeke" );
    // });
  }



  kupi() {
    this.formData.pan = "123456789";
    this.formData.securityCode = "123";
    this.formData.expirationYear = 2018;
    this.formData.expirationMonth = 12;
    this.formData.cardHolderName = "Pera";
    this.formData.idMerchant = 1;
    this.formData.acquirerOrderId = 1;
    this.formData.transcactionIdMerchant = 1;


    let completePaymentDTO: CompletePaymentDTO = new CompletePaymentDTO;
    completePaymentDTO.pan = this.formData.pan;
    completePaymentDTO.cardHolderName = this.formData.cardHolderName;
    completePaymentDTO.expiration = new Date(this.formData.expirationYear, this.formData.expirationMonth);
    completePaymentDTO.securityCode = this.formData.securityCode;
    //completePaymentDTO.idMerchant = this.transactionDTO.merchant.idMerchant; 
    //completePaymentDTO.transactionIdMerchant = this.transactionDTO.transactionIdMerchant; 
    completePaymentDTO.acquirerOrderId = this.transactionId;

    console.log('COMPLETE PAYMENT DTO!!!');
    console.log(completePaymentDTO);

    this.waiting = true;
    this.acquirerDataService.completePayment(completePaymentDTO).subscribe(
      (data) => {
        console.log("Waiting for payment completion...");

      },
      err => console.log(err)
      
    
    );
  }

  isFieldValidForm(field: string) {
    return (!this.form.controls[field].valid && this.form.controls[field].touched);
  }

}
