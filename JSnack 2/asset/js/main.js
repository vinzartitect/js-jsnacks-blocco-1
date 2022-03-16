// inserire due numeri con prompt
// stampare il maggiore

let primaParola = prompt(`inserisci la prima parola please!`);
let secondaParola = prompt(`inserisci la seconda parola please!`);

let lunghezzaPrimaParola = primaParola.length;
let lunghezzaSecondaParola = secondaParola.length;

let risultato = document.getElementById(`result`);



if (lunghezzaPrimaParola > lunghezzaSecondaParola) {

    console.log(primaParola + ' ' + secondaParola);
    risultato.innerHTML = `${primaParola} e ${secondaParola}`;

} else if (lunghezzaPrimaParola < lunghezzaSecondaParola) {

    console.log(secondaParola + ' ' + primaParola);
    risultato.innerHTML = `${secondaParola} e ${primaParola}`;    

} else {

    console.log(`sono lunghi uguali`);
    risultato.innerHTML = `guarda che caso, ${primaParola} e ${secondaParola} sono lunghi uguali!`;

}





