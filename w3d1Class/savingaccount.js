class SavingAccount extends Account{
    constructor(number,interest){
        super(number);
        this._interest=interest;
    }
    setInterset(interest){
        this._interest=interest;
    }
    getInterest(){
        return this._interest;
    }
    addInterest(){
        this.deposit(this._balance *this._interest/100);
    }
    toString(){
        return `Account numeber =${this._number} balance=${this._balance} interest=${this._interest}`;
    }
   endOfMonth(){
     let per=this._balance;

     this.addInterest();

     return `at the end of the month we have ${this._balance-per}`;

   }

}