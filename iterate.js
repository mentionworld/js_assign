function iterate() {

    let i = 20;
    while (i <= 30) {
        if (i % 2 == 0)
            document.write('"' + i + "  is Even " + '"' + "<br>");
        else
            document.write('"' + i + "  is Odd " + '"' + "<br>");

        i++;
    }
}
iterate();