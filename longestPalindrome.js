console.log("looking for the longest palindrome...");

function findPalindrome(givenString){
    let maxPalindromeLength = givenString.length;
    let chars = {};
    let currentChar = "";

    // count how many of each letter there are, and store in hashmap
    for (let i =0; i<givenString.length; ++i){
        currentChar = givenString[i];

        if (chars[currentChar] === undefined)
            chars[currentChar] = 1;
        else
            chars[currentChar] = chars[currentChar] + 1;
    }

    // check how many odd currentChars exist, subtract them from max palindrome length (except one)
    for (char in chars){
        console.log(char, "->", chars[char]);
        if (chars[char] % 2 != 0)
            maxPalindromeLength--;
    }

    if (maxPalindromeLength < givenString.length -1) // more than one odd char was found, give back one of them back to be used in palindrome
        maxPalindromeLength++;

    return maxPalindromeLength;
}


let input = "abccccdd";

console.log("The max palindrome is:", findPalindrome("abccccdd"), "chars long");
