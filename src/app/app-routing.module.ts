import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanDisbursalComponent } from './loan-disbursal/loan-disbursal.component';
import { AccountComponent } from './account/account.component';
import { DebitByChequeComponent } from './debit-by-cheque/debit-by-cheque.component';
import { TransferComponent } from './transfer/transfer.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'addAccount', component:AccountComponent},
  {path:'viewAccount', component:AccountComponent},
  {path: 'addloanrequest', component: LoanRequestComponent},
  {path: 'loandisbursal', component: LoanDisbursalComponent},
  {path:'transaction', component:TransactionComponent},
  {path:'creditBySlip', component:CreditComponent},
  {path:'debitBySlip', component:DebitComponent},
  {path:'creditByCheque', component:TransferComponent},
  {path:'debitByCheque', component:DebitByChequeComponent},
  {path:'home', component: HomePageComponent},
  {path:'', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
