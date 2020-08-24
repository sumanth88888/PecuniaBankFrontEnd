import { Component, OnInit, ViewChild } from '@angular/core';
import { Accountform } from '../accountform';
import { Account } from '../account';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';
import { Customer } from '../customer';
import { DeleteForm } from '../delete-form';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accform:Accountform = new Accountform();
  account:Account = new Account();
  customer:Customer = new Customer();
  dFrm:DeleteForm = new DeleteForm();

  accountId:string;
  msg:string;
  @ViewChild('accfrm')
  form:NgForm;
  flag:boolean = false;
  
 
  showAddFlag:boolean = false;
  showViewFlag:boolean = false;
  showEditFlag:boolean = false;
  showDeleteFlag=false;

  constructor(private service:BankService) { }

  ngOnInit(): void {
  }

  showAddAccount(){
    this.showAddFlag=true;
    this.showEditFlag=false;
    this.showViewFlag=false;
    this.showDeleteFlag=false;
    this.msg=undefined;
  }
  
  showViewAccount(){
    this.showAddFlag=false;
    this.showEditFlag=false;
    this.showViewFlag=true;
    this.showDeleteFlag=false;
    this.msg=undefined;
  }

  showDeleteAccount(){
    this.showAddFlag=false;
    this.showEditFlag=false;
    this.showViewFlag=false;
    this.showDeleteFlag=true;
    this.msg=undefined;
  }


  addAccount() {
    let resp1 = this.service.addAccount(this.accform);
    resp1.subscribe((data)=>{this.msg = data.message;console.log(data); this.form.resetForm();this.showAddFlag=false;},
          error=>{console.log(error);this.msg=error.error.message});
          this.flag=true;
  }

  viewAccount() {
    let resp3 = this.service.viewAccount(this.accountId);
    resp3.subscribe((data)=>{this.account = data;this.accountId='';
          this.showAddFlag=false;
          this.showEditFlag=true;
          this.showViewFlag=false;
          this.showDeleteFlag=false;
          this.flag=true;
          this.msg=undefined;
  },
         error=>{console.log(error); this.msg=error.error.message});
  }

  // editCustomer(account:any) {
  //  let resp2 = this.service.editCustomer(account);
  //  resp2.subscribe((data)=>{this.msg= data.message;console.log(data)},
  //     error=>{console.log(error); this.msg=error.error.message});
  // }


  deleteAccount() {
    let resp4 = this.service.deleteAccount(this.dFrm);
    resp4.subscribe((data)=>{this.msg = data.message;console.log(data);this.form.reset()},
    error=>{console.log(error); this.msg=error.error.message});
  }

  goback(){
    this.flag=false;
  }
}
