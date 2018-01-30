
export class CompletePaymentDTO {

  public pan : string;
  public securityCode : string;
  public cardHolderName : string;
  public expiration : Date; 
  public idMerchant : string;
  public transactionIdMerchant: number;  
  public acquirerOrderId : number; 
  
}
