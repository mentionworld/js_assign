function check() {
    let dob = prompt("Enter  your DOB in format of DD/MM/YY");
    let y = new Date();
    let year = dob.split("/");
    let result = y.getFullYear() - year[2];
    if (result > 18 && result < 44)

        location.href = "https://selfregistration.cowin.gov.in";
    else
        document.write("Sorry you are not eligible !!!");

}
check();