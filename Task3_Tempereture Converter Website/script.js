function convert() {
    var temp = document.getElementById("initialtemp");
    var valueSelected = temp.value;

    if (valueSelected == "c") {
        var convertedF = cToF();
        var convertedK = cToK();

        return document.getElementById("result").value = convertedF + "F" + " = " + convertedK + "K";
    } else if (valueSelected == "f") {
        var convertedC = fToC();
        var convertedK = fToK();

        return document.getElementById("result").value = convertedC + "C" + " = " + convertedK + "K";
    } else if (valueSelected == "k") {
        var convertedF = kToF();
        var convertedC = kToC();

        return document.getElementById("result").value = convertedF + "F" + " = " + convertedC + "C";
    }
}
// celcius to rest

function cToF() {
    var c = document.getElementById("tempinput").value;
    return (c * 9 / 5) + 32;
}

function cToK() {
    var c = document.getElementById("tempinput").value;
    return c + 273.15;
}
// fahrenheit to rest

function fToC() {
    var f = document.getElementById("tempinput").value;
    return (f - 32) * 5 / 9;
}

function fToK() {
    var f = document.getElementById("tempinput").value;
    return (f - 32) * 5 / 9 + 273.15;
}
// kelvin to rest

function kToC() {
    var k = document.getElementById("tempinput").value;
    return k - 273.15;
}

function kToF() {
    var k = document.getElementById("tempinput").value;
    return (k - 273.15) * 9 / 5 + 32;
}