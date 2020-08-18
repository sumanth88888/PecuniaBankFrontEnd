import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanDisbursalComponent } from './loan-disbursal/loan-disbursal.component';

const routes: Routes = [
  {path: 'addloanrequest', component: LoanRequestComponent},
  {path: 'loandisbursal', component: LoanDisbursalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
