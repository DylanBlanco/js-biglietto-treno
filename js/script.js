//chiedi km
const km = prompt (`Quanti km vuoi percorrere?:`);
console.log (`km percorsi:`, km);

//chiedi età
const age = prompt (`Quanti anni hai?:`);
console.log (`età utente:`, age);

//prezzo biglietto
const prezzokm = 0.21
let prezzofinale = km * prezzokm;
console.log (`prezzo biglietto:`, prezzokm);

//calcola prezzo under e over
if (age <= 18) {
    prezzofinale=prezzofinale * 0.8;
    console.log ('Prezzo Scontato Under 18:', prezzofinale);
}
else if (age >= 65) {
    prezzofinale = prezzofinale * 0.6;
    console.log('Prezzo Scontato Over 65:', prezzofinale);
}

//stampa prezzo biglietto
document.getElementById('prezzofinale').innerHTML= prezzofinale.toFixed(2);