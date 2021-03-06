import { Component, OnInit } from '@angular/core';
import { LoanRequest } from '../loan-request';
import { LoanDisbursalForm } from '../loan-disbursal-form';
import { BankService } from '../bank.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loan-disbursal',
  templateUrl: './loan-disbursal.component.html',
  styleUrls: ['./loan-disbursal.component.css']
})
export class LoanDisbursalComponent implements OnInit {

  loanRequest:LoanRequest = new LoanRequest();
  loanRequests:any=[];
  loanRequestByStatus:any=[];
  loanDisburseMessage:string;
  error:string;
  pendingFlag:boolean=false;
  requestedFlag:boolean=false;
  constructor(private loanService:BankService, private toastr:ToastrService) { }

  ngOnInit() {
    this.loanService.getPendingLoanRequest().subscribe(data=>{this.loanRequests=data;this.pendingFlag=true}, error=>{this.error=error.error.message;console.log(error)});
  }

  public disburseLoanRequests(request:LoanRequest,option:string){
    let loanDisbursalForm:LoanDisbursalForm = new LoanDisbursalForm();
    loanDisbursalForm.loanRequestId = request.loanRequestId;
    loanDisbursalForm.option = option;
    this.loanService.loanDisburse(loanDisbursalForm).subscribe(
                  data=>{this.loanDisburseMessage=data.message;
                         this.toastr.success(this.loanDisburseMessage)},
                  error=>{this.toastr.error(error.error.message)});
    this.loanRequests = this.loanRequests.filter(item=>item != request);
  }

  public getLoanRequestByStatus(status:string){
    return this.loanService.getLoanRequestByStatus(status).subscribe(
      data=>{this.loanRequestByStatus=data;
             this.requestedFlag=true;})
  }

  public pendingLoanrequest(){
    this.loanService.getPendingLoanRequest().subscribe(data=>{this.loanRequests=data;this.pendingFlag=true;this.requestedFlag=false;}, error=>{this.error=error.error.message;console.log(error)});
  }
}
