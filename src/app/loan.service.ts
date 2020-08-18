import { Injectable } from '@angular/core';
import { LoanRequestForm } from './loan-request-form';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoanRequest } from './loan-request';
import { LoanDisbursalForm } from './loan-disbursal-form';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  
  url:string = "http://localhost:8082/pecunia/loanrequest/";
  url1:string = "http://localhost:8082/pecunia/";
  constructor(private http:HttpClient) { }

  public addLoan(loanrequestform:LoanRequestForm):Observable<any>{
    return this.http.post(this.url,loanrequestform);
  }

  public getPendingLoanRequest(){
    return this.http.get(this.url1+"viewloanrequest/pending")
  }

  public loanDisburse(loanDisbursalForm:LoanDisbursalForm):Observable<any>{
    console.log(loanDisbursalForm.loanRequestId);
    console.log(loanDisbursalForm.option);
    return this.http.post("http://localhost:8082/pecunia/disburseloanrequest/",loanDisbursalForm);
  }

  public getLoanRequestByStatus(status:string){
    return this.http.get(this.url1+"viewloanrequest/"+status);
  }
}
