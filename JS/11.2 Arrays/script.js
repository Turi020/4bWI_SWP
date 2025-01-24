function Bitfolge(bitfolge) {
    let invertierteFolge = '';
    for (let i = 0; i < bitfolge.length; i++) {
        invertierteFolge += bitfolge[i] === '0' ? '1' : '0';

    }
    return invertierteFolge;
}

const input = "000111000";
const output = Bitfolge(input);


console.log(output);
console.log(input);