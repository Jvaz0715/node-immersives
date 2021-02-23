// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

// Declare the getInput() functions respectively to first and last name
const firstName = getInput(0);
const lastName = getInput(1);

// Use console.log with template literals to greet user by first and last name
console.log(`Hi, ${firstName} ${lastName}.`);

// Use .toUpperCase() to capitalize full name inside template literal
console.log(`This is your name in all caps: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);

// Use the [0] index to produce initials with template literal
console.log(`These are your initials: ${firstName[0]}.${lastName[0]}.`)

// Use template literals and .toLowerCase() to give user their Code Immersives email

console.log(`Your email is: ${firstName.toLowerCase()}.${lastName.toLowerCase()}@codeimmersives.com`)

