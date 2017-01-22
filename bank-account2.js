
var accounts = [];

function createAccount(account){
		accounts.push(account);
		return account;
}

function getAccount(userName){

	var matchedAccount;
	accounts.forEach(function(singleAccount){
			if (singleAccount.userName === userName){
				matchedAccount = singleAccount;
			}			
	});

		return matchedAccount;
}

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


var rohan = createAccount({balance: 0,userName: 'rohan'});
deposit(rohan,100);

console.log(getBalance(rohan));

withdraw(rohan,50);
console.log(getBalance(rohan));


var existingAccount = getAccount('rohan');
console.log(getBalance(existingAccount));

var adi = createAccount({balance: 200,userName: 'adi'});
console.log(accounts);

existingAccount = getAccount('adi');
console.log(existingAccount);

// console.log('making deposit of 500');
// console.log(deposit(account,500));

// console.log('withdrawal of 200');
// console.log(withdraw(account,200));

// console.log('Balance = '+getBalance(account));
