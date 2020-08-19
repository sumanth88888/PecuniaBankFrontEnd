export class BankConstants {

    public static SPRING_WEB_URL="http://localhost:8082/pecunia/";

    public static ADD_ACCOUNT_URL= BankConstants.SPRING_WEB_URL +"addaccount";
    public static VIEW_ACCOUNT_URL= BankConstants.SPRING_WEB_URL +"viewaccountbyaccid";
    public static EDIT_ACCOUNT_URL= BankConstants.SPRING_WEB_URL +"editaccount";
    public static DELETE_ACCOUNT_URL=BankConstants.SPRING_WEB_URL+"deleteaccount";

    public static LOAN_REQUEST = BankConstants.SPRING_WEB_URL+"loanrequest";
    public static PENDING_LOAN_REQUEST = BankConstants.SPRING_WEB_URL+"viewloanrequest/pending";
    public static LOAN_DISBURSAL = BankConstants.SPRING_WEB_URL+"disburseloanrequest";
    public static VIEW_LOAN_REQUEST = BankConstants.SPRING_WEB_URL+"viewloanrequest/"

    public static CREDIT_BY_SLIP_URL= BankConstants.SPRING_WEB_URL+"creditBySlip";
    public static CREDIT_BY_CHEQUE_URL= BankConstants.SPRING_WEB_URL+"creditByCheque";
    public static DEBIT_BY_SLIP_URL= BankConstants.SPRING_WEB_URL+"debitBySlip";
    public static DEBIT_BY_CHEQUE_URL= BankConstants.SPRING_WEB_URL+"debitByCheque";


    public static VIEW_TXN_URL= BankConstants.SPRING_WEB_URL+"getBankTransactions";
    public static VIEW_TXN_DT_URL= BankConstants.SPRING_WEB_URL+"getBankTxnsForDateRange";
    public static VIEW_TXN_WITH_LIMIT_URL= BankConstants.SPRING_WEB_URL+"getBankTxnsLimit";
    public static VIEW_TXN_FROM_LAST_UPDATE_URL= BankConstants.SPRING_WEB_URL+"getBankTxnsFormLastUpdate";
}
