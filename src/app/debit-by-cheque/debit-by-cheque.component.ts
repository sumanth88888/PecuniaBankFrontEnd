import { Component, OnInit, ViewChild } from '@angular/core';
import { Txnform } from '../txnform';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-debit-by-cheque',
  templateUrl: './debit-by-cheque.component.html',
  styleUrls: ['./debit-by-cheque.component.css']
})
export class DebitByChequeComponent implements OnInit {
  txnform: Txnform = new Txnform();
  msg: string;
  showFlag = true;
  showError:boolean=true;
  @ViewChild('accfrm')
  form: NgForm;
  constructor(private transactionservice:BankService) { }

  ngOnInit() {
  }

  debitByCheque()
  {
    this.transactionservice.debitByCheque(this.txnform).subscribe(data => {
      this.msg = data.message; 
      console.log(data);
      this.form.reset();
      this.showFlag = true;},
      error => {this.msg = error.error.message;this.showError=false;});
      

        
  }
}
