function convertToFehrenheit(temp) {
    return (temp * 1.8) + 32;

}

function convertToCelsius(temp) {
    return (temp - 32) * 0.5556;
}

function convert() {
    let type = prompt("Enter F for Celsius to Fehrenheit    C for Fehrenhit to Celsius");
    let temp = prompt("Enter number value");
    if (type == "f") {
        document.write("Celsius To Fehrenhit <br>  ");
        document.write(temp + "C :=" + convertToFehrenheit(temp) + "f");
    } else {
        document.write(" Fehrenhit To Celsius <br>  ");
        document.write(temp + "f :=" + convertToCelsius(temp) + "C");
    }
}
convert();