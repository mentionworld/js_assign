let num1 = prompt("Enter first number ");
let num2 = prompt("Enter second number ");
let num3 = prompt("Enter third number ");
if (num1 > num2 || num1 > num3)
    document.write("Num1 is Greater !!");
else if (num2 > num1 || num2 > num3)
    document.write("Num2 is Greater  !!");
else {
    document.write("num3 is Greater !!");
}