import loadInput from '../utils/loadInput.mjs';

const lines = loadInput(2, true);

const line = lines[0];

const extractData = (line) => {
    let tmp = line.split('Game ')[1];
    tmp = tmp.split(':');
    const numGame = tmp[0];
    tmp = tmp.slice(1)[0];
    const maxColors = tmp.split(';').map(s => s.trim())
        .reduce((acc, setsTxt) => {
        const _sets = setsTxt.split(', ').map(setTxt => setTxt.split(' ')).reduce((acc, arraySet) => {
            acc[arraySet[1]] = arraySet[0];
            return acc;
        }, {});
        acc.push(_sets)
        return acc;
        }, [])
        .reduce((acc, set) => {
            const setEntries = Object.entries(set);
            setEntries.forEach(([color, nb]) => {
                const _nb = Number(nb);
                if (!acc[color] || acc[color] < _nb) {
                    acc[color] = _nb;
                }
                return acc;
            })
            return acc;
        }, {});
    return { game: numGame, maxColors }
}

const result = lines.map(extractData)
    .reduce((acc, { maxColors: { green, red, blue } }) => acc += Number(green) * Number(red) * Number(blue), 0);

console.log('Result:', result);
