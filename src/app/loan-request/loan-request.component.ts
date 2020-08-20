import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanRequestForm } from '../loan-request-form';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private loanService:BankService, private route:Router, private toastr: ToastrService) { }

  ngOnInit() {
    
  }

  public addloan(){
    this.loanService.addLoan(this.loanRequestForm).subscribe(data=>{
      this.message=data.message;this.toastr.success(this.message);
      this.flag=false;
      this.form.reset();}
      ,error=>{this.errorMessage=error.error.message; this.toastr.error(this.errorMessage)});
  }

  public goto(){
    this.route.navigateByUrl("/loandisbursal");
  }
}
