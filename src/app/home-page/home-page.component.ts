import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router, ) { }

  ngOnInit() {
  }

  msg:string;
  errorMsg:string;

  customer_id:string;
  userName:string;
  role:string;

  userFlag:boolean=true;
  adminFlag:boolean=true;


  showP1Flag:boolean=false;
  showP2Flag:boolean=false;
  showP3Flag:boolean=false;
  showP4Flag:boolean=false;
  showP5Flag:boolean=false;
  viewP1(){
    this.showP1Flag=true;
    this.showP2Flag=false;
    this.showP3Flag=false;
    this.showP4Flag=false;
    this.showP5Flag=false;
  }
  viewP2(){
    this.showP1Flag=false;
    this.showP2Flag=true;
    this.showP3Flag=false;
    this.showP4Flag=false;
    this.showP5Flag=false;
  }
  viewP3(){
    this.showP1Flag=false;
    this.showP2Flag=false;
    this.showP3Flag=true;
    this.showP4Flag=false;
    this.showP5Flag=false;
  }
  viewP4(){
    this.showP1Flag=false;
    this.showP2Flag=false;
    this.showP3Flag=false;
    this.showP4Flag=true;
    this.showP5Flag=false;
  }
  viewP5(){
    this.showP1Flag=false;
    this.showP2Flag=false;
    this.showP3Flag=false;
    this.showP4Flag=false;
    this.showP5Flag=true;
  }

  gotoAccount(){
    this.router.navigateByUrl("/addAccount");
  }
  gotoCustomer(){
    this.router.navigateByUrl("/customer");
  }
  gotoLoan(){
    this.router.navigateByUrl("/addloanrequest");
  }
  gotoTransferFund(){
    this.router.navigateByUrl("/transaction");
  }
  gotoPassbook(){
    this.router.navigateByUrl("/passbook");
  }
}
