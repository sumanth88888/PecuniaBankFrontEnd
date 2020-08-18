import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanRequestForm } from '../loan-request-form';
import { NgForm } from '@angular/forms';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {

  loanRequestForm: LoanRequestForm = new LoanRequestForm();
  message:string;
  errorMessage:string;
  @ViewChild('loanrequestform')
  form:NgForm
  constructor(private loanService:LoanService) { }

  ngOnInit() {
  }

  public addloan(){
    this.loanRequestForm.accountId="8146089998";
    this.loanService.addLoan(this.loanRequestForm).subscribe(data=>{this.message=data;console.log(data);}
      ,error=>{this.errorMessage=error.error.message});
  }


}
