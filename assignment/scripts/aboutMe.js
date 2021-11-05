// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName='Desiree ';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName='Quade';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName=firstName+lastName;
// 4 - Console log the value of `fullName`
console.log(fullName);
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber=17;


console.log('Let me check my work');
console.log(firstName);
console.log(lastName);
console.log(luckyNumber);
// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log('My name is '+fullName+', and I think '+luckyNumber+' is a winner!');
// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous=true;
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food='cheesecake ';
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets=1;
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets=0;


console.log('just checking my work again');
console.log(adventurous);
console.log('My favorite food is',food);
console.log('number of pets:',pets);
console.log('number of friends pets:',friendsPets);
// 11 - Add two pets to your `pets` variable
pets+=2;
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets=3;
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if (adventurous){
  console.log('Adventures are great!');
}
else{
  console.log('How about we stay home?');
}


console.log('testing: change adventurous to false');
adventurous=false;

if (adventurous){
  console.log('Adventures are great!');
}
else{
  console.log('How about we stay home?');
}

console.log('both options work but I prefer adventurous');
adventurous=true;
// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber==2&&adventurous){
  console.log('Role the dice!');
}


console.log('testing: change lucky number to 2');
luckyNumber=2;

if (luckyNumber==2&&adventurous){
  console.log('Role the dice!');
}

console.log('condition works but I prefer lucky number 17');
luckyNumber=17;
// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets<allowedPets){
  console.log('I can have more pets!');
}
else if (pets==allowedPets){
  console.log('I have enough pets');
}
else{
  console.log('Oh no, I have too many pets!');
}


console.log('testing: I had to give one pet to a friend');
pets--;
friendsPets++;

console.log('number of pets:',pets);
console.log('number of friendsPets:',friendsPets);

if (pets<allowedPets){
  console.log('I can have more pets!');
}
else if (pets==allowedPets){
  console.log('I have enough pets');
}
else{
  console.log('Oh no, I have too many pets!');
}

console.log('testing: I got 3 more pets!');
pets+=3;

if (pets<allowedPets){
  console.log('I can have more pets!');
}
else if (pets==allowedPets){
  console.log('I have enough pets');
}
else{
  console.log('Oh no, I have too many pets!');
}

console.log('How many pets do I have:',pets);
console.log('I only need my pup neko! I give all other pets to friends');
pets-=4;
friendsPets+=4;

console.log('number of pets:',pets);
console.log('number of friends pets:',friendsPets);
// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.
let mostPets;

if (pets>friendsPets){
  mostPets=pets;
}
else if (friendsPets>pets){
  mostPets=friendsPets;
}

console.log(mostPets);
// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
console.log('testing: I have more pets than friends pets');

switch (pets>friendsPets) {
  case true:
// I put in console.log so I can track which one runs
  console.log('true');
  mostPets=pets;
  break;
  case false:
  console.log('false');
  mostPets=friendsPets;
  break;
}

console.log(mostPets);
// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
adventurous=true? console.log('Adventures are great!'):
console.log('How about we stay home?');
