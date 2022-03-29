// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
string firstName = "Desiree";
Console.WriteLine("my first name is: " + firstName);

// 2 - Create a second variable called `lastName` and assign it the value of your last name
string lastName = "Quade";
Console.WriteLine("my last name is: " + lastName);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
string fullName = firstName + " " + lastName;

// 4 - Console log the value of `fullName`
Console.WriteLine("my full name is: " + fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
int luckyNumber = 17;
Console.WriteLine("my lucky number is: " + luckyNumber);

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
Console.WriteLine("My name is " + fullName + ", and I think " + luckyNumber + " is a winner!");

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
bool adventurous = true;
Console.WriteLine(adventurous);

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
string[] food = { "cheeseCake", "pizza", "raspberries" };
for (int i = 0; i < food.Length; i++)
{
    Console.WriteLine(food[i]);
}

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
int pets = 1;
Console.WriteLine("number of pets i have: " + pets);

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
int friendsPets = 0;
Console.WriteLine("number of pets my friend has: " + friendsPets);

// 11 - Add two pets to your `pets` variable
pets += 2;
Console.WriteLine("i got some more pets: " + pets);

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
int allowedPets = 2;
Console.WriteLine("max number of pets are: " + allowedPets);

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if (adventurous == true)
{
    Console.WriteLine("Adventures are great!");
}
if (adventurous == false)
{
    Console.WriteLine("How about we stay hone?");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber == 2 && adventurous == true)
{
    Console.WriteLine("Roll the dice!");
}

luckyNumber -= 15;
if (luckyNumber == 2 && adventurous == true)
{
    Console.WriteLine("Roll the dice!");
}

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets)
{
    Console.WriteLine("I can have more pets!");
}
if (pets == allowedPets)
{
    Console.WriteLine("I have enough pets");
}
if (pets > allowedPets)
{
    Console.WriteLine("Oh no, I have too many pets!");
}

pets --;
if (pets < allowedPets)
{
    Console.WriteLine("I can have more pets!");
}
if (pets == allowedPets)
{
    Console.WriteLine("I have enough pets");
}
if (pets > allowedPets)
{
    Console.WriteLine("Oh no, I have too many pets!");
}

pets --;
if (pets < allowedPets)
{
    Console.WriteLine("I can have more pets!");
}
if (pets == allowedPets)
{
    Console.WriteLine("I have enough pets");
}
if (pets > allowedPets)
{
    Console.WriteLine("Oh no, I have too many pets!");
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.


// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!


// I put in console.log so I can track which one runs


// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
