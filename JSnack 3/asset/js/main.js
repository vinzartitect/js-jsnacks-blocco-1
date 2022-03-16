// inserire 10 volte un numero con prompt
// stampare la somma di tutti i numeri

let array = [];
let somma = 0;

for ( let i = 0; i < 10; i++) {

    let inputNumero = parseInt(prompt(`inserisci un numero qualsiasi!`));
    console.log(inputNumero);

    if (isNaN(inputNumero)) {

        alert(`please ricarica la pagina e inserisci solo numeri!`);

    } else {

        array.push(inputNumero);
        
        somma += inputNumero;

    }

}

console.log(array);
document.getElementById(`list`).innerHTML = `i numeri da te inseriti sono: ${array} !`;

console.log(somma);
document.getElementById(`result`).innerHTML = `la somma di tutti i numeri è ${somma} !`;
