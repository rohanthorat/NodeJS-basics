/* var name = 'Rohan';

name = undefined;

//console.log(name);

function doesNothing(age){
	console.log(age);
}

//console.log(doesNothing());

doesNothing(); */

// var name = undefined;
// var x;

// if (typeof x === 'undefined'){
// 	console.log('x is undefined');
// }

function greetUser(name) {
	
	if (typeof name === 'undefined'){
		console.log('Hello World');
	}else{
		console.log('Hello '+ name);
	}
}

greetUser('Rohan');