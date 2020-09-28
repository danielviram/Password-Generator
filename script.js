// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Arrays For Characters
let todoArray= ["a","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",",A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",];
let lowerCase = ["a","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numberChar = ["1","2","3","4","5","6","7","8","9","0"];
let specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";",":","<",">","?","/"];

// Function to Generate Password
function generatePassword(){
    let passwordString=" ";

  // declaring variables and prompting user
    let usarLowerCase = confirm ("Do you want to have lowercase characters?");
    let usarUpperCase = confirm ("Do you want to have uppercase characters?");
    let usarNumero = confirm ("Do you want to have numerical characters? ");
    let usarSpecial = confirm ( "Do you want to have special characters?");

  // To verify if "No" is selected for all of them it will prompt to select a character and run the loop again. 
  while (usarLowerCase == false && usarUpperCase== false && usarNumero== false && usarSpecial== false){
    alert("Please select type of character! ")
    usarLowerCase = confirm ("Do you want to have lowercase characters?");
    usarUpperCase = confirm ("Do you want to have uppercase characters?");
    usarNumero = confirm ("Do you want to have numerical characters? ");
    usarSpecial = confirm ( "Do you want to have special characters?");
  }
  // while loop to check for password legth. If less than it will prompt uset to input again. 
  let contrasenaLarga= parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  while (contrasenaLarga < 8 || contrasenaLarga > 128 || typeof(contrasenaLarga) !="number" ){
      alert ("Please choose a number that is more than 8 AND less than 128 characters");
      contrasenaLarga= parseInt(prompt("How many characters do you want the password to be? The password CAN NOT be less than 8 or more than 128 characters."));
  }

 
  // If clicked "YES"
  if (usarLowerCase == true){
    todoArray.push (lowerCase);
  }

  if (usarUpperCase == true ){
    todoArray.push(upperCase);
  }

  if (usarNumero == true){
    todoArray.push (numberChar);
  }

  if (usarUpperCase == true){
    todoArray.push (specialChar)
  }
// For Loop

 
  for ( let i= 0 ; i < contrasenaLarga ; i ++){
  
    let randomCharArrayNum;
    let selectedCharArray;
    let randomCharNum;
    let randomChar;
    // Random Number generated from the grpup of array
    randomCharArrayNum= parseInt(Math.floor(Math.random()*todoArray.length));
    
    // Random Number for the character array 
    selectedCharArray=todoArray[randomCharArrayNum];

    // variable that stores random number based on length of selected array
    randomCharNum=Math.floor(Math.random()*selectedCharArray.length);
    // 
    randomChar=selectedCharArray[randomCharNum];
    // Adding String

    passwordString =randomChar;
  

    return passwordString;
  }   



}
