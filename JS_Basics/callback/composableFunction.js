function modifySentence(sentence, modifier) {
    return sentence.split(" ").map(modifier).join(" ")
}

function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1)
}

let capitalisedSentence = modifySentence("Hello There Nathan", capitalise)

console.log(capitalisedSentence)