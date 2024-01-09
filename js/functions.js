console.log('functions-JS OK');

/**
 * Checking if the word entered by the user is a palidrome or not
 * @param {string} input //User-entered imput parameter
 * @returns //The word checked
 */
function isPalindrome(input) {
    const customInput = input.trim().toLowerCase();
    const reverseInput = customInput.split('').reverse('').join('');
    return customInput === reverseInput;
}