if ((41 > 7) || (0 < 4)) {
    console.log("Its true");
}


let randomNumber = Math.floor(Math.random() * 100);
let randomNumber0 = Math.floor(Math.random() * 100);

if ((randomNumber < randomNumber0) && (randomNumber < 50)) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}

if ((randomNumber < 30) || (randomNumber0 < 30)) {
    console.log("Eine der beiden ist kleiner als 30")
}

if ((randomNumber < 50) && (randomNumber0 != 50)) {
    console.log("Erste Zahl klein, zweite kein 50iger")
}