import {Merchant} from "./merchant";

export class TransactionDTO {
    amount: string;
    errorUrl: string;
    failedUrl: number;
    merchant: Merchant;
    successUrl: string; 
    transactionIdMerchant: number; 
    vreme: Date; 

}
