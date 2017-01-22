var age = 24;

function localFunction(){
	console.log(age);
	age = 0;
}


localFunction();
console.log(age);