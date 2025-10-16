# Documentation

- Used code 'for (let i = 1; i <= 100; i++)' to define starting integer 1 and count to 100.
for (let i = 1; i <= 100; i++)

- Tested on console for errors. No errors. 

- Used code 'if (i % 3 === 0) {console.log("Fizz")}'. 
- Used code 'else if (i % 5 === 0) {console.log("Buzz")}'.
- Used code 'else if (i % 5 === 0 && i % 3 === 0) {console.log("FizzBuzz")}
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0){
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} 
	
- Tested in console for errors. Only got Fizz, Buzz and FizzBuzz but no integers. 

- Used code 'else {console.log(i)}
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0){
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else {
		console.log(i)
	}
}

- Tested in console for errors, no FizzBuzz printed. 

- Asked Prof. Rachel for help, she noted order of flow command.
- Rewrote code to have code 'if (i % 3 === 0 && i % 5 === 0) {console.log("FizzBuzz")}' first in the order of elif. 
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz")
	} else if (i % 5 === 0) {
		console.log("Buzz")
	} else if (i % 3 === 0) {
		console.log("Fizz")
	} else {
		console.log(i)
	}
}

- Tested in console, no errors, all strings and integers printed correctly. 
