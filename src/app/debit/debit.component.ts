import { Component, OnInit, ViewChild } from '@angular/core';
import { Txnform } from '../txnform';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
  txnform: Txnform = new Txnform();
  msg: string;
  showFlag = true;
  showError:boolean=true;
  @ViewChild('accfrm')
  form: NgForm;
  constructor(private transactionservice:BankService) { }

  ngOnInit() {
  }

  debitBySlip()
  {
    this.transactionservice.debitBySlip(this.txnform).subscribe(data => {
      this.msg = data.msg; 
      console.log(data);
      this.form.reset();
      this.showFlag = true;},
      error => {this.msg = error.error.msg;this.showError=false;});
      

        
  }
}
