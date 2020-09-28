# Password-Generator
Password Generator using Javascript
 
# Content of Project
This project contains the following files: script.js, index.html, and  style.css. If you want to view the files please click on the file name.
 
# Goals for Project
 
The assignment had the following storyline:
 
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

 
## Acceptance Criteria
 
The assignment has the following criteria:

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

 
## Procedure of Acceptance Criteria
 
Firstly, when the button has clicked a series of prompts are asked to the user to determine what kinds of characters as well as how many characters the new password should have. If all of the prompts are false, the questions are asked again. The password generator also prompts when the length requirements are not satisfied. An array will be included in the password generator that is pushed into an array. The first loop will choose what array will be used and the second loop will choose a random character from the array. After the loops are completed the new password will display in the text box.
 
# Issues
The main issue was the password length. This created an infinite loop with only giving one random character at a time instead of providing the number of characters desired. A possible workaround would be to use .chartAt() method. This would have kept the random characters from the string until the desired password was obtained.
 
 
# Future Developments
Along with the previous idea of using .chartAt() method, there are other improvements that would be used that are outside of the scope of the assignment. Firstly, the HTML could be modified to be more in line with the website. Secondly, a secondary button could be added to copy the newly created password. Lastly, checkboxes could be included as well to make the appearance of the website more appealing.









