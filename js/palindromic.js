console.log('palindromic-JS-OK');

//* Requiring user word imput
let userWord = prompt('Inserire la parola da verificare:', 'Anna').trim();

console.log(userWord);

//* Validating user imput
if (!isNaN(userWord) || userWord.length < 3) {
    console.error("La parola inserira non rispetta i parametri richiesti, assicurati di aver inserito una PAROLA e che sia ALMENO PIU' LUNGA DI TRE CARATTERI");
} else {
    //*Calling the function for word check
    if (isPalindrome(userWord)) {
        console.log('La parola inserita è palidroma!')
    } else {
        console.log('la parola inserita non è palindroma')
    }
}
