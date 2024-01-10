console.log('evenodd-JS-OK');

//* Initializing user input variables
let userChoice;
let userNumber;
//* Initializing CPU number variable
let cpuNumber;

//* While loop for validation on user choice input
while (true) {
    userChoice = prompt('Scegli PARI o DISPARI:', 'pari').trim().toLowerCase();

    if (userChoice === "pari" || userChoice === "dispari") {
        break;
    }

    alert(`Inserisci una scelta valida: puoi inserire solo "pari" o "dispari.`);
}

//* While loop for validation on user number input
while (true) {
    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5:', '4').trim());

    if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 5) {
        break;
    }

    alert('Inserisci un numero che sia valido e compreso tra 1 e 5.');
}

//* Checking on user inputs
console.log('Scelta utente:', userChoice);
console.log('Numero utente:', userNumber);

//* Generating random CPU number
cpuNumber = getRandomNumber(1, 5);
//* Checking on CPU input
console.log('Numero computer:', cpuNumber);

//*Summing
let sum = userNumber + cpuNumber;
//*Checking sum result number
console.log('Numero dalla somma', sum);

//* Verifying if "sum" is even or odd
let result = isEven(sum) ? "pari" : "dispari";
//*Checking sum result
console.log('Risultato somma:', result);

//*Declaring winner
if ((result === "pari" && userChoice === "pari") || (result === "dispari" && userChoice === "dispari")) {
    console.log('Hai vinto!');
} else {
    console.log('Il computer ha vinto!');
}