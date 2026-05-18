let userWord = prompt("Write A Sentence or a word")
console.log('Youe Sentence Length Is ' + userWord.length)
console.log('Your Sentence Words number is ' + userWord.split(" ").length)
console.log("Your sentence in UpperCase is " + userWord.toUpperCase())
console.log("Your Sentence in LowerCase is " + userWord.toLowerCase())
console.log("Your Sentence's first letter is " + userWord.slice(0,1))
console.log("Your Sentence's Last letter is " + userWord.slice(userWord.length - 1, userWord.length))
console.log('Is your sentence includes "a": ' + userWord.includes("a"))
if (userWord.includes("a")) {
    console.log("The Index of a in your sentence is " + userWord.indexOf("a"))
}