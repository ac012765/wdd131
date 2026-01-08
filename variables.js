//introduction to Java
const PI = 3.14;
let radius = 3;

let area = PI * radius ** 2;
console.log(area);

// Type Coersion: sees the string as a number and helps out the user doing math w/ a string
const one = 1;
const two = '2';

let result = one * two;
console.log(result);

// since there is a string in the operation, it concatenates the 'strings' instead of doing math
result = one + two;
console.log(result);

result = one + Number(two);
console.log(result);

/* comment type for multiple lines */
// Scope

let course = "CSE131"; // global scope
if (true) {
    let student = "John";
    console.log(course); //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); // does not work, can't access a block variable outside the block

/* if an error shows up then everything after that will not 
show up and it will stop where the error is */
