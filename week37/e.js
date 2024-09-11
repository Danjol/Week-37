/*
    Task: E
    Use the variable people from the example and print the names in reverse order (using a loop)
    NB: You should not change people, just use its contents.
*/
console.log("Task: E");
const people = ["Tony", "Christian", "Håkon"]

for (let index = people.length - 1; index >= 0; index--) {
    let person = people[index];
    console.log(person);
}
