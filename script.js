// Assignment Code
var generateBtn = document.querySelector("#generate");
// var newPasskey = document.querySelector("#password");
function generatePassword () {

var lengthOpt = parseInt(window.prompt("Password length? (from 8 to 128)"));
if (isNaN(lengthOpt)){
  alert("Password length must be a number.");
  return ("Bad input. Password not generated.");
}
var lowerOpt = window.confirm("Do you want lower cased letters?");
var upperOpt = window.confirm("Do you want upper cased letters?");
var numericOpt = window.confirm("Do you want numbers?");
var symbolOpt = window.confirm("Do you want special characters?");

// Check to see if user chose at least one character type to be included into the password.
if ((lowerOpt === false) &&
    (upperOpt === false) &&
    (numericOpt === false) &&
    (symbolOpt === false)){
      alert("At least one character type must be chosen for password!");
      return ("Bad input. Password not generated.");  
    }

let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericalCharacters = "0123456789";
let specialCharacters = "~!@#$%^&*()/?<>";  
let availableCharacters = "";
let countOfPswchar = 0;
let password = "";

if (lowerOpt === true){
availableCharacters += lowerCaseCharacters;
password += lowerCaseCharacters[ Math.floor(Math.random() * lowerCaseCharacters.length )];
countOfPswchar ++;
console.log("lowerOpt", password);
};
if (upperOpt === true){
availableCharacters += upperCaseCharacters;
password += upperCaseCharacters[ Math.floor(Math.random() * upperCaseCharacters.length )];
countOfPswchar ++;
};
if (numericOpt === true){
availableCharacters += numericalCharacters;
password += numericalCharacters[ Math.floor(Math.random() * numericalCharacters.length )];
countOfPswchar ++;
};
if (symbolOpt === true){
availableCharacters += specialCharacters;
password += specialCharacters[ Math.floor(Math.random() * specialCharacters.length )];
countOfPswchar ++;
};
console.log("password", password);

//Generate the rest of the password
for (;countOfPswchar < lengthOpt; countOfPswchar++) {
  password += availableCharacters[ Math.floor(Math.random() * availableCharacters.length )];  
}
console.log("fullpassword", password);




return password

}

// var arbitraryFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   numeric: getRandomNumber,
//   symbol: getRandomSymbol
// };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
