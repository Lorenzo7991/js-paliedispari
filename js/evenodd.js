console.log('evenodd-JS-OK');

let userChoice;
let userNumber;

while (true) {
    userChoice = prompt('Scegli PARI o DISPARI:').trim().toLowerCase();

    if (userChoice === "pari" || userChoice === "dispari") {
        break;
    }

    alert(`Inserisci una scelta valida: puoi inserire solo "pari" o "dispari.`);
}

while (true) {
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:").trim());

    if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 5) {
        break;
    }

    alert("Inserisci un numero che sia valido e compreso tra 1 e 5.");
}

console.log('Scelta utente:', userChoice);
console.log('Numero utente:', userNumber);


