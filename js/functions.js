console.log('functions-JS OK');

function isPalindrome(input) {
    const customInput = input.trim().toLowerCase();
    const reverseInput = customInput.split('').reverse('').join('');
    return customInput === reverseInput;
}