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
  accId: string;
  userId: string;
  msg: string;
  username: string;
  txnDateFormFlag = false;
  rform: Reportform = new Reportform();
  rtype: string;
  errorMsg: string;
  form: NgForm

  constructor(private bankService: BankService) { }

  ngOnInit() {

  }

  showTxnDateForm() {
    this.txnDateFormFlag = true;

  }
  public ViewTxnsDtRange() {
    this.bankService.viewTxnsDtRange(this.rform).subscribe(data => {
      this.msg = data.msg; console.log(data);
      this.form.reset();
    },
      error => { this.errorMsg = error.error.message });

  }

}
