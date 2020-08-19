import { Customer } from './customer';

export class Account {

    accountId:string;
	
    customer:Customer = new Customer();
    
	branchCode:string;
    
    ifscCode:string;
	
	acc_bal:number;
	
	accountType:string;
}
