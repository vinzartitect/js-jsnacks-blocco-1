// inserire due numeri con prompt
// stampare il maggiore

let primoNumero = parseInt(prompt(`inserisci il primo numero please!`));
let secondoNumero = parseInt(prompt(`inserisci il secondo numero please!`));

let risultato = document.getElementById(`result`);

if (isNaN(primoNumero||secondoNumero)) {

    alert(`compà inserisci i numeri per cortesia, non facciamo tarantelle eh!`);

} else {

    if (primoNumero > secondoNumero) {

        console.log(primoNumero);
        risultato.innerHTML = `${primoNumero} è il maggiore!`;

    } else if (primoNumero < secondoNumero) {

        console.log(secondoNumero);
        risultato.innerHTML = `${secondoNumero} è il maggiore!`;

    } else {

        console.log(`pari`);
        risultato.innerHTML = `guarda il caso, sono uguali!`;

    }

}



