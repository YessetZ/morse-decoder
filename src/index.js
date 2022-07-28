const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let map = { '10' : '.', '11' : '-', "**" : ' ' };
    let morse = [];

    for (let w = 0; w < expr.length; w += 10) {

        let wArr = [];

        for (let l = w; l < w + 10; l += 2) {

            let letter = expr[l] + expr[l+1];

            for (let m in map) {

                // console.log("Map: " + m + " is " + map[m] + "  Letter: " + letter )
                
                if (m === letter) { 

                    wArr.push(map[m]);
                    break;

                }

            }
            
        }

        if (wArr[0] === ' ')
            wArr = [' '];

        morse.push(wArr.join(''));
    }

    let word = new Array();

    for (let i in morse) {
        
        if (morse[i] === ' ') {
            word += morse[i];
        }
        else {

            for (let j in MORSE_TABLE) {

                if (morse[i] === j) {
                    word += MORSE_TABLE[j];
                    break;
                }
                
            }

        }
    }

    return word;
}

module.exports = {
    decode
}