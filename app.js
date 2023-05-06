// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
var firstName = prompt('Entr Your First Name');

var lastName = prompt('Entr Your last Name');

var fullName = firstName + ' ' + lastName;

alert('Welcome ' + fullName);


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
var string = prompt('Entr Your Favourite Mobile phone model')
document.write('My favourite phone is: ' + string + '</br>' + 'Length of string: ' + string.length, '</br>')

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var country = 'Pakistani';

var findIndex = country.indexOf('n')

document.write("Index Of 'n':" + findIndex + '</br>');

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

var hello = 'Hello World';
var findlastIndex = hello.lastIndexOf('l');

document.write("Last Index of 'l': " + findlastIndex + '</br>');

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser
var nationality = 'Pakistani';
var findChar = nationality.charAt(3);
document.write('character at index 3 : ' + findChar, '</br>')

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

var city = 'Hyderabad'
document.write('City: ' + city, '</br>')
var newText = city.replace("Hyder", "Islam");
document.write('After Replacement: ' + newText, '</br>')

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message1 = "Ali and Sami are best friends. They play cricket and football together "
document.write('String: ' + message1 + '</br>') 

var newText1 = message1.replaceAll('and','&')              
document.write('After Replacement: ' + newText1 + '</br>')

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser

var str = '472'
document.write('Value: '+ str + '</br>'+ 'Type: ' + typeof(str) + '</br>'+ 'Value: ' + parseInt(str) + '</br>'+ 'type: ' + typeof(str)  + '</br>' )


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters
var word = prompt('Entr Any Word ')
document.write('User Input: ' + word, '</br>' + 'Upper Case: ' + word.toUpperCase())

// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
var sNum = num.toString();
document.write("Number:" + num + "</br>"+ "Result:" +sNum.replace('.', '') + "</br>");

// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = 'University of Karachi';
var arr = university.split();
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++)
        document.write(arr[i][j] + "<br />");
}


// 17. Write a program to display the last character of a user
// input.
var userInput = prompt(`Enter something`);
var myIndex = userInput.length - 1;
document.write("User Input" + userInput + "Last Character of Input: " + myIndex )



