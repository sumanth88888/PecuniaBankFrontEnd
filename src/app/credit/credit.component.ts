import { Component, OnInit, ViewChild } from '@angular/core';
import { Txnform } from '../txnform';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  txnform: Txnform = new Txnform();
  msg: string;
  showFlag = true;
  showError:boolean=true;
  @ViewChild('accfrm')
  form: NgForm;
  constructor(private transactionservice:BankService) { }

  ngOnInit() {
  }

  creditBySlip()
  {
      this.transactionservice.creditBySlip(this.txnform).subscribe(data => {
        this.msg = data.message; 
        console.log(data);
        this.form.reset();
        this.showFlag = true;},
        error => {this.msg = error.error.message;this.showError=false;});
        
  }
}

