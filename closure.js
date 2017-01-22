// function greetMaker(name){
// 	function greet(){
// 		console.log('Hello '+ name);

// 	}
// 	return greet;
// }

// var greetRohan = greetMaker('Rohan');
// greetRohan();

function createAdder(baseNumber){
	return function(numberToAdd){
		return baseNumber + numberToAdd;
	}
}

var test1 = createAdder(10);

console.log(test1(2));
console.log(test1(0));