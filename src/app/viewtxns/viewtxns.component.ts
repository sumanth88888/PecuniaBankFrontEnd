import { Component, OnInit, ViewChild } from '@angular/core';
import { BankService } from '../bank.service';
import { ActivatedRoute } from '@angular/router';
import { Reportform } from '../reportform';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viewtxns',
  templateUrl: './viewtxns.component.html',
  styleUrls: ['./viewtxns.component.css']
})
export class ViewtxnsComponent implements OnInit {

  errorMsg:string;
  txns: any = [];

  constructor(private bankService: BankService) { }

  ngOnInit() {
    
  }
public viewTransactions(){
  
  this.bankService.viewTxns("123456654322").subscribe(data => 
    {this.txns = data; console.log(data)},
  error=>this.errorMsg=error.error.msg)
  }
}


 