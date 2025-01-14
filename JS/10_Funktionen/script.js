function printMenu(name, age, place) {

    console.log("Willkommen " + name + "! You are " + age + "years old and come from" + place);
    console.log("Drücke");
    console.log("1 für Start");
    console.log("2 für Statistik");
    console.log("3 für Ende");
}
printMenu("Turi", 18, "Dornbirn");
printMenu("Emir", 13, "Dornbirn");

let a = 11;
let b = 21;
let year = 2025;

function add(a, b) {
    return a + b;
}
console.log("Das Ergebnis von dem Wert " + a + "+" + b + " beträgt " + add(a, b));

function subtract(a, b) {
    return a - b;
}
console.log("Das Ergebnis von dem Wert " + a + "-" + b + " beträgt " + subtract(a, b));

function multiply(a, b) {
    return a * b;
}
console.log("Das Ergebnis von dem Wert " + a + "*" + b + " beträgt " + multiply(a, b));

function supercalculation(a, b) {
    return (a + b) / 2 * a;
}
console.log("Das Ergebnis von (" + a + " + " + b + ") / 2 * " + a + " ist " + supercalculation(a, b));

function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = [(7 * A + 1) / 19];
    let M = (11 * A + 4 - B) % 29;
    let Q = [N / 4];
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W;


    if (P > 0) {
        console.log("Ostersonntag im Jahr " + year + " ist am " + P + ". April " + year);
    } else {
        console.log("Ostersonntag im Jahr " + year + " ist am " + P + 31 + ". März " + year);
    }
    printEasterDate(year);
}