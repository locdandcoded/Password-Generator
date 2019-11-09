//var userInput = prompt("Please enter password that is between 8-128 characters long and has at least one character type Special, Numeric, Lowercase, or Uppercase character");

//alert(userInput);


///generate random password////
function myFunction(){

    /////set password length and special character////
    var complexity = document.getElementById("slider").value;
   
    ////////all possible values for password choice
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]/|";

    var password = "";

    ///create for loop to choose wassword characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        }
    ////add password to text box////
    document.getElementById("textbox").value = password;
}