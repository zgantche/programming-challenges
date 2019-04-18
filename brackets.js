console.log("checking brackets...\n");

function bracketValidator(str){
    let strArray = str.split("");
    let openBracketsCache = [];
    let result = "YES";

    for (let i=0; i<strArray.length; i++){
        // console.log("cache", openBracketsCache);
        // console.log(strArray[i]);

        if (strArray[i] === "(" || strArray[i] === "[" || strArray[i] === "{"){
            openBracketsCache.push(strArray[i]);
        }
        else {
            switch (strArray[i]) {
                case ")":
                    if (openBracketsCache.pop() != "(")
                        result = "NO";
                    break;
                case "]":
                    if (openBracketsCache.pop() != "[")
                        result = "NO";
                    break;
                case "}":
                    if (openBracketsCache.pop() != "{")
                        result = "NO";
                    break;
                default:
                    result = "NO";
                    break;
            }
        }

        if (result === "NO")
            break;
    }

    if (openBracketsCache.length > 0)
        result = "NO";

    return result;
}

console.log(bracketValidator("()[]{}"));
console.log(bracketValidator("())[][]"));
console.log(bracketValidator("({[]})"));
console.log(bracketValidator("({[]*})"));
console.log(bracketValidator("([(({}[{}]))])"));