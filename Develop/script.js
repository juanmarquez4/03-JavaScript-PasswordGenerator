// User input variables
var ok;
var selection;
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;

// password variables values

specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
 ];
 lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function to generate password
function writePassword() {
  ok = prompt("How many characters would you like in your password? Chose between 8 and 128");

  if (!ok) {
    alert("This needs a value");
  } else if (ok > 128 || ok < 8){
    ok = prompt("You must choose between 8 and 128 characters");
  } else{
    confirmSpecialCharacters = confirm("Will the password contain special characters?");
    confirmNumericCharacters = confirm("Will the password contain mumeric characters?");
    confirmLowerCasedCharacters = confirm("Will the password contain lower cassed characters?");
    confirmUpperCasedCharacters = confirm("Will the password contain upper cassed characters?")
  };

  // 4 negative user variables selection
  if (!confirmNumericCharacters && !confirmNumericCharacters && !confirmLowerCasedCharacters && !confirmUpperCasedCharacters) {
    selection = ("You must select a criteria");
  } 
  
  // 4 positive user variables selection
  else if (confirmSpecialCharacters && confirmNumericCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters) {
    selection = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  } 

  // 3 positive user variables selection
  else if (confirmSpecialCharacters && confirmNumericCharacters && confirmLowerCasedCharacters) {
    selection = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmNumericCharacters && confirmUpperCasedCharacters) {
    selection = specialCharacters.concat(numericCharacters, upperCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters) {
    selection = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmNumericCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters) {
    selection = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }

  // 2 positive user varibles selection
  else if (confirmSpecialCharacters && confirmNumericCharacters) {
    selection = specialCharacters.concat(numericCharacters);
  }
  else if (confirmSpecialCharacters && confirmLowerCasedCharacters) {
    selection = specialCharacters.concat(lowerCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmUpperCasedCharacters) {
    selection = specialCharacters.concat(upperCasedCharacters);
  }
  else if (confirmLowerCasedCharacters && confirmNumericCharacters) {
    selection = lowerCasedCharacters.concat(numericCharacters);
  }
  else if (confirmLowerCasedCharacters && confirmUpperCasedCharacters) {
    selection = lowerCasedCharacters.concat(upperCasedCharacters);
  }
  else if (confirmNumericCharacters && confirmUpperCasedCharacters) {
    selection = numericCharacters.concat(upperCasedCharacters);
  }

  // 1 positive user variable selection
  else if (confirmSpecialCharacters) {
    selection = specialCharacters;
  }
  else if (confirmNumericCharacters) {
    selection = numericCharacters;
  }
  else if (confirmLowerCasedCharacters) {
    selection = lowerCasedCharacters;
  }
  else if (confirmUpperCasedCharacters) {
    selection = upperCasedCharacters;
  };

  var ps = [];

  for (var i=0; i < ok; i++) {
    var pickSelection = selection[Math.floor(Math.random() * selection.length)];
    ps.push(pickSelection);
  }

  var password = ps.join("");
  UserInput(password);
  return password;
}

function UserInput(password) {
  document.getElementById("password").textContent = password;
}
