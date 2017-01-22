var account = {
	balance: 0
};


//deposit

//withdraw

//getBalance


function deposit(account,amount){

			account.balance += amount;
			return account.balance;
}

function withdraw(account, amount){
			account.balance -= amount;
			return account.balance;
}

function getBalance(account){
			return account.balance;
}


console.log('making deposit of 500');
console.log(deposit(account,500));

console.log('withdrawal of 200');
console.log(withdraw(account,200));

console.log('Balance = '+getBalance(account));
