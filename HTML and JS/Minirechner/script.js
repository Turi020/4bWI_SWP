document.getElementById("button").addEventListener("click", function() {

    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;



    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid Value");
    } else {
        const sum = parseFloat(value1) + parseFloat(value2);
        alert("Sum:" + sum);
    }


});

document.getElementById("button").addEventListener("click", function() {

    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;



    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid Value");
    } else {
        const sum = parseFloat(value1) - parseFloat(value2);
        alert("Das ergebnis der Subtraktion beträgt:" + sum);
    }


});

document.getElementById("button").addEventListener("click", function() {

    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;



    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid Value");
    } else {
        const sum = parseFloat(value1) * parseFloat(value2);
        alert("Das Ergebnis der Multiplikation lautet:" + sum);
    }


});
document.getElementById("button").addEventListener("click", function() {

    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;



    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid Value");
    } else {
        const sum = parseFloat(value1) / parseFloat(value2);
        alert("Das Ergebnis der Division lautet:" + sum);
    }


});