import { Component, OnInit, ViewChild } from '@angular/core';
import { Transfer } from '../transfer';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transfer: Transfer = new Transfer();
  msg: string;
  showFlag = true;
  showError:boolean=true;
  @ViewChild('accfrm')
  form: NgForm;
  constructor(private transactionservice:BankService) { }

  ngOnInit() {
  }

  creditByCheque()
  {
      this.transactionservice.transfer(this.transfer).subscribe(data => {
        this.msg = data.msg; 
        console.log(data);
        this.form.reset();
        this.showFlag = true;},
        error => {this.msg = error.error.msg;this.showError=false;});
        
  }
}
