function calculateAge() {
    var d1 = parseInt(document.getElementById("date").value);
    var m1 = parseInt(document.getElementById("month").value);
    var y1 = parseInt(document.getElementById("year").value);
    var currentDate = new Date();
    var d2 = currentDate.getDate();
    var m2 = 1 + currentDate.getMonth();
    var y2 = currentDate.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (y1 > y2 || (y1 === y2 && m1 > m2) || (y1 === y2 && m1 === m2 && d1 > d2)) {
        document.getElementById("age").innerHTML = "Invalid birthdate";
        return;
    }

    if (isLeapYear(y1)) {
        month[1] = 29;
    }

    if (d1 > d2) {
        m2 = m2 - 1;
        d2 = d2 + month[m2 - 1];
    }
    if (m1 > m2) {
        y2 = y2 - 1;
        m2 = m2 + 12;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById("age").innerHTML = "   " +"    Your Age is " + y + "  Years " + m + "  Months " + d + " Days";
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
