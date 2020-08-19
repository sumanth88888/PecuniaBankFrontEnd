import { Injectable } from '@angular/core';
import { BankConstants } from './bank-constants';
import { Observable } from 'rxjs';
import { Accountform } from './accountform';
import { HttpClient } from '@angular/common/http';
import { LoanRequestForm } from './loan-request-form';
import { LoanDisbursalForm } from './loan-disbursal-form';
import { Txnform } from './txnform';
import { Transfer } from './transfer';
import { Reportform } from './reportform';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }

  public addAccount(form:Accountform):Observable<any> {
    return this.http.post(BankConstants.ADD_ACCOUNT_URL,form);
  }

  public editCustomer(account:Account):Observable<any> {
    return this.http.put(BankConstants.EDIT_ACCOUNT_URL,account);
  }

  public viewAccount(accId:String):Observable<any> {
    return this.http.get(BankConstants.VIEW_ACCOUNT_URL + "/" + accId);
  }

  public deleteAccount(accountId:string):Observable<any> {
    return this.http.put(BankConstants.DELETE_ACCOUNT_URL,accountId);
  }


  public addLoan(loanrequestform:LoanRequestForm):Observable<any>{
    return this.http.post(BankConstants.LOAN_REQUEST,loanrequestform);
  }

  public getPendingLoanRequest(){
    return this.http.get(BankConstants.PENDING_LOAN_REQUEST);
  }

  public loanDisburse(loanDisbursalForm:LoanDisbursalForm):Observable<any>{
    console.log(loanDisbursalForm.loanRequestId);
    console.log(loanDisbursalForm.option);
    return this.http.post(BankConstants.LOAN_DISBURSAL,loanDisbursalForm);
  }

  public getLoanRequestByStatus(status:string){
    return this.http.get(BankConstants.VIEW_LOAN_REQUEST+status);
  }


  public creditBySlip(txnform:Txnform):Observable<any>{
    return this.http.post(BankConstants.CREDIT_BY_SLIP_URL, txnform );
  }

  public debitBySlip(txnform:Txnform):Observable<any>{
    return this.http.post(BankConstants.DEBIT_BY_SLIP_URL, txnform);
  }

  public debitByCheque(txnform:Txnform):Observable<any>{
    return this.http.post(BankConstants.DEBIT_BY_CHEQUE_URL, txnform);
  }

  public transfer(transfer:Transfer):Observable<any>{
    return this.http.post(BankConstants.CREDIT_BY_CHEQUE_URL, transfer);
  }


  public decrypt(token:string): string{
    
    let str = "";
    for(let i =0; i< token.length; ++i){
      str = str + String.fromCharCode(token.charCodeAt(i) - 3);
    }
    console.log(str);
    return str;
  }


  public viewTxns(userId:string):Observable<any>{
    return this.http.get(BankConstants.VIEW_TXN_URL+"/"+123456654322);
 }
 
 public viewTxnsDtRange(rform:Reportform):Observable<any>{
   return this.http.post(BankConstants.VIEW_TXN_DT_URL,rform);
 }

 public viewLimitedTxns(rform:Reportform):Observable<any>{
  return this.http.post(BankConstants.VIEW_TXN_WITH_LIMIT_URL,rform);
}

public updatingPassbookFromLast(rform:Reportform):Observable<any>{
  return this.http.post(BankConstants.VIEW_TXN_FROM_LAST_UPDATE_URL,rform);
}
}
