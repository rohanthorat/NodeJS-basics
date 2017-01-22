var grades = [100,25];

// grades.push(79);

// grades.unshift(80); // adds am element at the start of an array

// grades.pop();

// grades.shift(); 	//deletes an element from the start of an array

// console.log(grades);


// console.log(grades[1]);


// grades.push(97);
// grades.forEach(function (grades){

// 	console.log(grades);
// });
// console.log(grades.length);

var totalGrade  = 0;

grades.push(98);

grades.forEach(function (grades){

	totalGrade += grades;
	console.log('Current grade is '+ totalGrade);
});

console.log('Average grade = '+ totalGrade/grades.length);