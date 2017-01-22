var person = {

	gender: 'male',
	eyecolor: 'brown'
};
var firstNameProperty = 'firstName'


person['firstNameProperty'] = 'Rohan';
person.lastName = 'Thorat';
person.age = 24;

delete person.age;
console.log(person);

function greetUser(person){
	console.log('Hello '+person.firstName+' '+person.lastName);
}

greetUser(person);

var pet= {
	name: 'Rob',
	type: 'dog'
}

function printPet(pet){

	console.log('You own a dog type thats name is ' + pet.name);
}

printPet(pet);
