var isValid = true;

function toggleBoolean(variable){

	if(typeof variable == 'boolean'){
		return !variable;
	}else{
		console.log('Warning! not a boolean');
	}
}

console.log(toggleBoolean('df'));