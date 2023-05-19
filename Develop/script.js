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



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

function generatePassword(){
    var passlength = prompt("how many characters would you like? (8-128)");
    while((passlength < 8) || ( passlength > 128) || (isNaN(passlength) === true)){
        alert("Not a valid imput. Please input a number value between 8-128")
        passlength = prompt("how many characters would you like? (8-128)");

    }
    //ask questions for characters 
    var confirmLowerCase = confirm("Would you like to add Lowercase Characters?");
    var confirmUppperCase = confirm("Would you like to add UpperCase Characters?");
    var confirmNumbers = confirm("Would you like to add Numbers?");
    var confirmSpecials = confirm("Would you like to add Special Characters?");
    
    //create var to hold characters
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specials = "!@#$%^&*"
    
    var characterBank = "";
    var newPassword = "";
    //add if statment depednging on user answer
    if (confirmLowerCase === true){
        characterBank = characterBank.concat(lowerCase)
    }
    if (confirmUppperCase === true){
        characterBank = characterBank.concat(upperCase)
    }
    if (confirmNumbers === true){
        characterBank = characterBank.concat(numbers)
    }
    if (confirmSpecials === true){
        characterBank = characterBank.concat(specials)
    }
    //grabs all and mixups the variables and produces password here
    function mixupBank(max){
        return [Math.floor(Math.random() * max)]
    }
    // equations for password generation
    for (var i = 0; i < passlength; i++){
        newPassword = newPassword.concat(characterBank.charAt(mixupBank(characterBank.length - 1)))
    }
    return newPassword
}