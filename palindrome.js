let string = prompt("Enter  your String !!");

function reverseString(string) {
    return string.split("").reverse().join("");
}

let result = reverseString(string);
if (string === result) {
    document.write("Reverse string is ::<br>" + string + ":=" + result + "<br> String is Palindrome");
} else {
    document.write("Reverse string is ::<br>" + string + ":=" + result + "<br> String is Not  Palindrome");
}