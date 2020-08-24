
import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reportform } from '../reportform';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-passbook-update',
  templateUrl: './passbook-update.component.html',
  styleUrls: ['./passbook-update.component.css']
})
export class PassbookUpdateComponent implements OnInit {

  txns: any = [];
  rform: Reportform = new Reportform();
  error:string;
  form: NgForm;
  errorMsg:string;
  flag:boolean=true;
  txnDateFormFlag = false;
  userIdFlag = false;
  txnsLimitFlag = false;
  lastUpdateFlag=false;

  constructor(private bankService: BankService) { }


  ngOnInit() {

  }

  showTxnDateForm() {
    this.txnDateFormFlag = true;
    this.userIdFlag = false;
    this.txnsLimitFlag = false;
    this.lastUpdateFlag=false;
  }

  showIdForm() {
    this.userIdFlag = true;
    this.txnDateFormFlag = false;
    this.txnsLimitFlag = false;
    this.lastUpdateFlag=false;
  }

  showTxnsLimitForm() {
    this.txnsLimitFlag = true;
    this.userIdFlag = false;
    this.txnDateFormFlag = false;
    this.lastUpdateFlag=false;
  }

  showLastUpdateForm(){
    this.lastUpdateFlag=true;
    this.txnsLimitFlag = false;
    this.userIdFlag = false;
    this.txnDateFormFlag = false;
  }


  public viewTransactions() {
    this.bankService.viewTxns(this.rform).subscribe(data => this.txns = data,
      error=>{this.error=error.error.message;this.flag=false;
        console.log(error)})

      
  }
  public viewTxnsDtRange() {

    this.bankService.viewTxnsDtRange(this.rform).subscribe(data => this.txns = data,
      error=>{this.error=error.error.message;this.flag=false;
        });

      
  }
  public viewTxnsLimit(){
    this.bankService.viewLimitedTxns(this.rform).subscribe(data => this.txns = data,
      error=>{this.error=error.error.message;this.flag=false;
        console.log(error)})

      
  }
  public viewLastUpdatedTvns(){
    this.bankService.updatingPassbookFromLast(this.rform).subscribe(data => this.txns = data,
      error=>{this.error=error.error.message;this.flag=false;
        console.log(error)})

      
  }

}