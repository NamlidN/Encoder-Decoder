let secAlphabet = [

    { letter: "A", code: 1 },
    { letter: "B", code: 2 },
    { letter: "C", code: 3 },
    { letter: "D", code: 4 },
    { letter: "E", code: 5 },
    { letter: "F", code: 6 },
    { letter: "G", code: 7 },
    { letter: "H", code: 8 },
    { letter: "I", code: 9 },
    { letter: "J", code: 10 },
    { letter: "K", code: 11 },
    { letter: "L", code: 12 },
    { letter: "M", code: 13 },
    { letter: "N", code: 14 },
    { letter: "O", code: 15 },
    { letter: "P", code: 16 },
    { letter: "Q", code: 17 },
    { letter: "R", code: 18 },
    { letter: "S", code: 19 },
    { letter: "T", code: 20 },
    { letter: "U", code: 21 },
    { letter: "V", code: 22 },
    { letter: "W", code: 23 },
    { letter: "X", code: 24 },
    { letter: "Y", code: 25 },
    { letter: "Z", code: 26 },
];
let Alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let output;
let schlussel;
let input;
let newWord;
function asdf() {
    document.getElementById('out').innerHTML = '';
    input = document.getElementById('input').value.toUpperCase();
    schlussel = Number(document.getElementById('num').value);
 
        for (let inputs of input) {
   secAlphabet.forEach(function (val) {
            if (val.letter == inputs) {

                output = val.code + schlussel;
                if (output <= 26) {
                    newWord = Alph.slice(output -1 , output );

                } else {
                    output = output - 26;
                    newWord = Alph.slice(output -1 , output );

                }


                document.getElementById('out').innerHTML += newWord;

            }
        })
    };
}
function asdf2() {
    document.getElementById('out2').innerHTML = '';
    input = document.getElementById('input2').value.toUpperCase();
    schlussel = Number(document.getElementById('num').value);
   
        for (let inputs of input) {
 secAlphabet.forEach(function (val) {
            if (val.letter == inputs) {

                output = val.code - schlussel;
                if (output <= 26) {
                    newWord = Alph.slice(output -1 , output );

                } else {
                    output = output - 25;
                    newWord = Alph.slice(output -1 , output );

                }


                document.getElementById('out2').innerHTML += newWord;

            }
        })
    };
}

