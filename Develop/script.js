//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page



// Assignment code here
// have user click button and generate a random code
  //button click > PROMPTS TO check/uncheck criteria, upper, lower, numbers, specials, and LENGTH (8-128)
//use an array full of all numbers, vartters, and 1-8 shift mode to pull from
//click generate to keep looking 
//promts for lower/upper case, numeric, and specials

//for loop for
  //alert prompt boxes
  //

//pull from here
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specials = ["!", "@", "#", "$", "%","^", "&", "*",];

alert("choose your criterias");
window.prompt("Pick your Criterias\n lower\n upper\n numbers\n specials", "Variables here")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = 8;
  const all = lower+upper+numbers+specials;
  return all[ Math.floor(random(all.length))];

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//function getPassword(length,lower, upper, specials, numbers)