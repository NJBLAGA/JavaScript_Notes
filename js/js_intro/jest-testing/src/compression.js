function compress(str) {
    if ((typeof str) != "string") {
        throw "Input string must be a string"
    }
    let count = {}
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            throw "Input string must be non-numeric"
        } else if (str[i] in count) {
            count[str[i]]++
        } else {
            count[str[i]] = 1
        }
    }
    let ans = ""
    for (let key in count) {
        if (count[key] < 3) {
            ans += String(key.repeat(count[key]))
        } else {
            ans += String(count[key])
            ans += String(key)
        }
    }
    return ans
}


console.log(compress("aaaaabbbbbcccc"))
