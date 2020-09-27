// Assignment Code
var generateBtn = document.querySelector("#generate");

var SeleteLength,SeleteUpperCase,SeleteLowerCase,SeleteSpecialCase,SeleteNum;


//assige different password letters

var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var SpecialCase = ["!", "#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "]" ,"^", "_"];

var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Write password to the #password input
function writePassword() {

    // pop up windows to ask user
    SeleteLength = prompt("How Many Chararters Do you like from your password");
    console.log("User Selete password length is " + SeleteLength)
        if (SeleteLength <=7 || SeleteLength >= 129) {
        alert("Please refresh page and try again between 8-128")
        }
        else {


                SeleteUpperCase = confirm ("Do you want upper case letter in your password?");
                console.log("User Selete UpperCase is " + SeleteUpperCase)

                SeleteLowerCase = confirm ("Do you want lower case letter in your password?");
                console.log("User Selete LowerCase is " + SeleteLowerCase)

                SeleteSpecialCase = confirm ("Do you want special case letter in your password?" );
                console.log("User Selete SpecialCase is " + SeleteSpecialCase)

                SeleteNum = confirm ("Do you want numbers in your password?");
                console.log("User Selete Number is " + SeleteNum)
        }

    //put user slected password option into new list of arry and for generator to pick from

    var NeedPasswordCharactors =[]

    if (SeleteUpperCase) {
    NeedPasswordCharactors = [...NeedPasswordCharactors, ...UpperCase]
    }

    if (SeleteLowerCase) {
    NeedPasswordCharactors = [...NeedPasswordCharactors, ...LowerCase]
    }

    if (SeleteSpecialCase) {
    NeedPasswordCharactors = [...NeedPasswordCharactors, ...SpecialCase]
    }

    if (SeleteNum) {
    NeedPasswordCharactors = [...NeedPasswordCharactors, ...Num]
    }

    if (!SeleteUpperCase && !SeleteLowerCase && !SeleteSpecialCase && !SeleteNum){
    alert("Please refresh page try again and at least choose one of the character sets!!!")
    console.log()
    }

    // console.log(NeedPasswordCharactors)



    var NewPasswordFinal = ""
    var RandomChar = 0

    //pick random charactor from the newly make arry list[NeedPasswordCharactors]

    for (var i = 0; i < SeleteLength; i = i+1 ){
    RandomChar = parseInt(Math.random()*NeedPasswordCharactors.length);
    NewPasswordFinal += NeedPasswordCharactors[RandomChar];
    }

    console.log(NewPasswordFinal)


//we call generatePassword().
// we create a variable for password and set it to generatePassword()

     var passwordText = document.querySelector("#password");
  
     passwordText.value = NewPasswordFinal;
  
}
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);