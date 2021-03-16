// Global Variables
var generateBtn = document.querySelector("#generate");

// Main function to generate random characters in password
function generatePassword () {

// User Input Prompts
var length = parseInt(window.prompt("Password length? (from 8 to 128)"));
if (isNaN(length)){
  alert("Password length must be a number.");
  return ("Bad input. Password not generated.");
}
var lower = window.confirm("Do you want lower cased letters?");
var upper = window.confirm("Do you want upper cased letters?");
var numeric = window.confirm("Do you want numbers?");
var symbol = window.confirm("Do you want special characters?");

// Check to see if user chose at least one character type to be included into the password.
if ((lower === false) &&
    (upper === false) &&
    (numeric === false) &&
    (symbol === false)){
      alert("At least one character type must be chosen for password!");
      return ("Bad input. Password not generated.");};

// Character types defined      
let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericalCharacters = "0123456789";
let specialCharacters = "~!@#$%^&*()/?<>";  
let availableCharacters = "";
let countOfPswchar = 0;
let password = "";

if (lower === true){
availableCharacters += lowerCaseCharacters;
password += lowerCaseCharacters[ Math.floor(Math.random() * lowerCaseCharacters.length )];
countOfPswchar ++;};

if (upper === true){
availableCharacters += upperCaseCharacters;
password += upperCaseCharacters[ Math.floor(Math.random() * upperCaseCharacters.length )];
countOfPswchar ++;};

if (numeric === true){
availableCharacters += numericalCharacters;
password += numericalCharacters[ Math.floor(Math.random() * numericalCharacters.length )];
countOfPswchar ++;};

if (symbol === true){
availableCharacters += specialCharacters;
password += specialCharacters[ Math.floor(Math.random() * specialCharacters.length )];
countOfPswchar ++;};

//Generate the rest of the password
for (;countOfPswchar < length; countOfPswchar++) {
  password += availableCharacters[ Math.floor(Math.random() * availableCharacters.length )];};

return password};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;};

// Event listener on generate button
generateBtn.addEventListener("click", writePassword);
