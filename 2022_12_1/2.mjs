import loadInput from '../utils/loadInput.mjs';
import onlyUnique from '../utils/onlyUnique.filter.mjs'

const lines = loadInput(1, true);
const digitsObject = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7', 
    '8': '8',
    '9': '9',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
}

const digitsText = [...Object.entries(digitsObject).flat()].filter(onlyUnique);

const getIndicesOf = (str, searchStr) => {
    let startIndex = 0;
    let index = 0;
    const indices = [];
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStr.length;
    }
    return indices;
}

const getDigitsList = (line) => {
    const indices = [];
    for (let i = 0; i < digitsText.length; i++) {
        const digitText = digitsText[i];
        const tmp = getIndicesOf(line, digitText)
        tmp.forEach(index => indices[index] = digitsObject[digitText])
    }
    return indices.filter(Boolean);
}

const result = lines.reduce((acc, line) => {
    const list = getDigitsList(line);
    const firstDigit = list[0];
    const lastDigit = list[list.length - 1];
    return acc + Number(`${firstDigit}${lastDigit}`);
}, 0);

console.log('result:', result);