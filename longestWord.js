console.log("looking for longest word...");

/**
 * Finds the longest word from a dictionary. Longest word must be spelled itaratively
 * letter by letter from words within the dictionary.
 * Ex. If "cats" is the longest word, the following words must exist within the
 * dictionary: "c", "ca", "cat", and "cats"
 * @param {string} dictionary - Hashmap of the passed dictionary.
 */
function longestWord(dictionary){

    let spelledWords = {};
    let currentWord = "";
    let results = [""];

    for (let i=0; i<dictionary.length; ++i){
        currentWord = dictionary[i].split("");

        if (currentWord.length === 1){
            spelledWords[currentWord[0]] = currentWord.length;
            console.log(currentWord[0], "->", spelledWords[currentWord]);
        }
        else {
            console.log(currentWord.pop());

            if (spelledWords[currentWord.join("")]){
                spelledWords[dictionary[i]] = dictionary[i].length;
                console.log("added '" + dictionary[i] + "' to spelledWords");

                if (results[0].length < dictionary[i].length){          //found longer word, replace
                    results = [];
                    results[0] = dictionary[i];
                }
                else if (results[0].length === dictionary[i].length){   //found equaly long word, append
                    results.push(dictionary[i]);
                }
            }
            else
                console.log("no spelling for", currentWord.join(""), "found");
        }
    }

    // loop through results and sort lexicographically
    results.sort();

    return results[0];
}


console.log("longest word is:", longestWord(["t", "to", "tom", "toma", "tomat", "tomato", "a", "an", "and"]));
console.log("longest word is:", longestWord(["t", "to", "tom", "a", "an", "and"]));