import { Injectable } from '@angular/core';
import { LoanRequestForm } from './loan-request-form';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  
  url:string = "http://localhost:8082/pecunia/addloanrequest/";
  constructor(private http:HttpClient) { }

  public addLoan(loanrequestform:LoanRequestForm):Observable<any>{
    return this.http.post(this.url+"/"+loanrequestform, {responseType:'json'});
  }
}
