console.log('functions-JS OK');

/**
 * Checking if the word entered by input is a palidrome or not
 * @param {string} input //User-entered imput parameter
 * @returns //The word checked
 */
function isPalindrome(input) {
    const customInput = input.trim().toLowerCase();
    const reverseInput = customInput.split('').reverse('').join('');
    return customInput === reverseInput;
}

/**
 * Generate a random number between 1 and 5
 * @returns //The random number
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Verifying if the number is even
 * @param {number} num 
 * @returns //True of False
 */
function isEven(num) {
    return number % 2 === 0;
}