import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanRequestForm } from '../loan-request-form';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {

  loanRequestForm: LoanRequestForm = new LoanRequestForm();
  message:string;
  flag:boolean=true;
  errorMessage:string;
  @ViewChild('loanrequestform')
  form:NgForm
  constructor(private loanService:BankService) { }

  ngOnInit() {
  }

  public addloan(){
    this.loanRequestForm.accountId="8146089998";
    this.loanService.addLoan(this.loanRequestForm).subscribe(data=>{
      this.message=data.message;console.log(data);
      this.flag=false;
      this.form.reset();}
      ,error=>{this.errorMessage=error.error.message});
  }


}
