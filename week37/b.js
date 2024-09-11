/*
    Task: B
    The following code is incorrect, can you fix the errors?
    This one isn't that simple, there are syntax errors and logical errors.
    Try to think about what we are trying to achieve.
*/
console.log("Task: B");

for (let i = 99; i > 0; i--) { 
    console.log(i + " bottles of soda on the shelf,");
    console.log(i + " bottles of soda on the shelf.");

    console.log(
        "Take one down, pass it around, " + (i - 1) + " bottles of soda on the shelf."
    );
    console.log(""); 
}

console.log("No more bottles of soda on the shelf");
