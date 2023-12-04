import loadInput from "../utils/loadInput.mjs";


const lines = loadInput(1, true);

const result = lines.reduce((acc, line) => {
    const tmp = line.split('');
    const firstDigit =tmp.find(e => !isNaN(Number(e)));
    const lastDigit = tmp.reverse().find(e => !isNaN(Number(e)));
    return acc + Number(`${firstDigit}${lastDigit}`);
}, 0);

console.log('result:', result);