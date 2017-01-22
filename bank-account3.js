
var accounts = [];

function createAccount(account){
		accounts.push(account);
		return account;
}

function getAccount(userName){

	var matchedAccount;
	for(var i=0; i<accounts.length; i++){
		if(accounts[i].userName === userName){
			matchedAccount = accounts[i];
		}
	}

	return matchedAccount;
}

function deposit(account,amount){

		if(typeof amount === 'number'){
			account.balance += amount;
			return account.balance;
		}else{
			console.log('Deposit Rejected!, Amount should be a number');
		}
			
}

function withdraw(account, amount){

		if(typeof amount === 'number'){
			account.balance -= amount;
		}else{
			console.log('withdrawal Rejected!, Amount should be a number');
		}
}

function getBalance(account){
			return account.balance;
}

function createBalanceGetter(account){

	return function(){
		return account.balance;
	};
}





var rohan = createAccount({balance: 0,userName: 'rohan'});
deposit(rohan,100);
withdraw(rohan,'myString');

var rohan2 = getAccount('rohan');
var getRohan2Balance = createBalanceGetter(rohan2);

console.log(getRohan2Balance());
//console.log(getBalance(rohan));

// withdraw(rohan,50);
// console.log(getBalance(rohan));


// var existingAccount = getAccount('rohan');
// console.log(getBalance(existingAccount));

// var adi = createAccount({balance: 200,userName: 'adi'});
// console.log(accounts);

// existingAccount = getAccount('adi');
// console.log(existingAccount);

// console.log('making deposit of 500');
// console.log(deposit(account,500));

// console.log('withdrawal of 200');
// console.log(withdraw(account,200));

// console.log('Balance = '+getBalance(account));


