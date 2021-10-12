class Bank{
    constructor(){
        this.accounts=[];
    }
    addAccount(number){

   this.accounts.push(new Account(number))
   return this.accounts.length;

    }
   addSavingAccount(number,interest){
    this.accounts.push(new SavingAccount(number,interest))
    return this.accounts.length;
   }
   total(){
    return this.accounts.length;
}
getAccount(idx){
    return this.accounts[idx];
}
   addCheckingAccount(number,overDraft){
    this.accounts.push(new CheckingAccount(number,overDraft))
    return this.accounts.length;
   }
   
   closeAccount(number){
    for(let i in this.accounts){
        if(this.accounts[i].getNumber()===number){
            this.accounts.splice(i);
            break;
        }
    }
}
accountReport(){
    return this.accounts.reduce((acc,ele,idx,array)=>{
        return acc+Bank.nextNumber(this,idx)+"\n";
    },"").trim();
}
endOfMonth(){
    return this.accounts.reduce((acc,el)=>acc+el.endOfMonth()+"\n","");
}
static nextNumber(bank,idx){
    return bank.getAccount(idx).getNumber();
}

   





}