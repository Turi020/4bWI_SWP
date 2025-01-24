import { resolve } from "path";

import { createInterface } from "readline";

const readline = createInterface({

    input: process.stdin,
    output: process.stdout,

});

const readLineAsync = () => {

    return new Promise((resolve) => {

        readline.question("", (userRes) => {

            resolve(userRes);



        });

    });

};



/// here cocmes your code 
console.log("Enter you name");
let InputOfUser = await readLineAsync();
console.log("Your name is" + InputOfUser);








readline.close();