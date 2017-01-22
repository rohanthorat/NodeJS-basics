function greetUser(name,lastName){
	console.log('Hello '+name+' '+lastName+'! how are you doing today');
	return 'Hello '+name+' '+lastName+'! how are you doing today';

}

var greeting = greetUser('Rohan','Thorat');

console.log('Greeting = '+greeting);


function add(a,b){
	return a + b;
}

var addition = add(5,3);
console.log('addition = '+addition);

console.log(add(5,5));