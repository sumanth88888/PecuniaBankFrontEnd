import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanDisbursalComponent } from './loan-disbursal/loan-disbursal.component';
import { AccountComponent } from './account/account.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { DebitByChequeComponent } from './debit-by-cheque/debit-by-cheque.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferComponent } from './transfer/transfer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PassbookUpdateComponent } from './passbook-update/passbook-update.component';
import { ViewtxnsComponent } from './viewtxns/viewtxns.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoanRequestComponent,
    LoanDisbursalComponent,
    CreditComponent,
    DebitComponent,
    DebitByChequeComponent,
    TransactionComponent,
    TransferComponent,
    HomePageComponent,
    PassbookUpdateComponent,
    ViewtxnsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
