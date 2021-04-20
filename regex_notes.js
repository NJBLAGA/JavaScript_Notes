//Define a search pattern that can be used to search for thins in a string.

// Test Method
let string1 = "Hello, World!"
let regex1 = /Hello|World/
let result1 = regex1.test(string1)
console.log(result1)

//flags i => caps g => occur
let string2 = "nathanJamesBlaga"
let regex2 = /nathanjamesblaga/i
let result2 = regex2.test(string2)
console.log(result2)

//match
let string3 = "I love coding so much!"
let regex3 = /coding/
let result3 = string3.match(regex3)
console.log(result3)

//repeat
let string4 = "Repeat repeat everything...all the time!"
let regex4 = /Repeat/ig
let result4 = string4.match(regex4)
console.log(result4)

//period
let string5 = "I love coding!"
let regex5 = /lo./
let result5 = regex5.test(string5)
console.log(result5)

//period
let string6 = "I love coding!"
let regex6 = /[aeiou]/ig
let result6 = string6.match(regex6)
console.log(result6)

//range- letters
let string7 = "I love coding so much, it is so much fun and I can do it every day if I want too!"
let regex7 = /[a-z]/ig
let result7 = string7.match(regex7)
console.log(result7)

//range - numbers
let string8 = "I love coding so much, by 1.12345567756"
let regex8 = /[2-6h-s]/ig
let result8 = string8.match(regex8)
console.log(result8)

//negate certain letters/numbers
let string9 = "3 blind mice"
let regex9 = /[^0-9aeiou]/ig
let result9 = string9.match(regex9)
console.log(result9)

//char appears one or more times
let string10 = "mississipspi"
let regex10 = /s+/g
let result10 = string10.match(regex10)
console.log(result10)

//greedy
let string11 = "titanic"
let regex11 = /t[a-z]*i/
let result11 = string11.match(regex11)
console.log(result11)

//lazy
let string12 = "<h1>Winter is coming</h1>"
let regex12 = /<.*?>/
let result12 = string12.match(regex12)
console.log(result12)

//Code Challenge
let crowd = 'P1P2P3P4P5P6CCCP7P8P9'
let reCriminals = /C+/ig
let matchedCriminals = crowd.match(reCriminals)
console.log(matchedCriminals)

// ^ begin string pattern
let string13 = "Nath and Nikki show"
let regex13 = /^Nath/
let result13 = string13.match(regex13)
console.log(result13)

//$ end string pattern
let string14 = "Nath and Nikki show"
let regex14 = /show$/
let result14 = string14.match(regex14)
console.log(result14)

//match all numbers and letters w
let string15 = "Nath and Nikki show season 1"
let regex15 = /\w/g
let result15 = string15.match(regex15).length
console.log(result15)

//match anything that is not numbers or letters W
let string16 = "Nath and Nikki show season 1...!"
let regex16 = /\W/g
let result16 = string15.match(regex16).length
console.log(result16)

//short hand class for numbers or digits d
let string17 = "Nath and Nikki show season 1....!"
let regex17 = /\d/g
let result17 = string17.match(regex17).length
console.log(result17)

//short hand non numbers
let string18 = "Nath and Nikki show season 1....!"
let regex18 = /\D/g
let result18 = string18.match(regex18).length
console.log(result18)

//username validation
/*
1. If there are numbers, they must be at the end.
2. Letters can be lowercase and uppercase.
3. At least two characters long. Two-letter names can't have numbers.
*/

let username = "JackOfAllTrades"
let userCheck = /^[A-Za-z]{2,}\d*$/ //{} =>indicate number of times pervious things can match, can match between 2 and infinite times. {min,max}
let answer = userCheck.test(username)
console.log(answer)

// match whitespace s => space, character return, tab, form feed, new line character
let string19 = "Nath and Nikki show season 1"
let regex19 = /\s/g
let result19 = string19.match(regex19)
console.log(result19)

//match non-whitespace S
let string20 = "Nath and Nikki show season 1"
let regex20 = /\S/g
let result20 = string20.match(regex20)
console.log(result20)

// match whitespace s => space, character return, tab, form feed, new line character
let string19a = "Nath and Nikki show season 1"
let regex19a = /\s/g
let result19a = string19a.match(regex19a)
console.log(result19a)

//match non-whitespace S
let string20c = "Nath and Nikki show season 1"
let regex20c = /\S/g
let result20c = string20c.match(regex20c)
console.log(result20c)

// match whitespace s => space, character return, tab, form feed, new line character
let string19b = "Nath and Nikki show season 1"
let regex19b = /\s/g
let result19b = string19b.match(regex19b)
console.log(result19b)

//match non-whitespace S
let string20b = "Nath and Nikki show season 1"
let regex20b = /\S/g
let result20b = string20b.match(regex20b)
console.log(result20b)

// match whitespace s => space, character return, tab, form feed, new line character
let string20a = "Nath and Nikki show season 1"
let regex20a = /\s/g
let result20a = string20a.match(regex20a)
console.log(result20a)

//spec lower or upper case
let string21 = "Ohhh no"
let regex21 = /Oh{3,6} no/
let result21 = regex21.test(string21)
console.log(result21)

//exact number matches
let string22 = "Timmmmber"
let regex22 = /tim{4,}ber/
let result22 = regex22.test(string22)
console.log(result22)

//check for all or none
let string23 = "favorite"
let regex23 = /favou?rite/
let result23 = regex23.test(string23)
console.log(result23)

// Look ahead
let quit = "qu"
let noquit = "qt"
let quRegex = /q(?=u)/ //positive look ahead
let qRegex = /q(?!u)/ //negative look ahead
quit.match(quRegex)
noquit.match(quRegex)

//capture group for letters
let string24 = "regex regex"
let regex24 = /(\w+)\s\1/
let result24 = regex24.test(string24)
let result24a = string24.match(regex24)
console.log(result24)
console.log(result24a)

//capture groups for numbers
let string25 = "42 42 42"
let regex25 = /^(\d+)\s\1\s\1$/
let result25 = regex25.test(string25)
let result25a = string25.match(regex25)
console.log(result25)


//capture groups for search and replace
let string26 = "The sky is silver"
let regex26 = /silver/
let result26 = string26.replace(regex26, "blue")
console.log(result26)

let replace = "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1') //$2 = second capture group $1 first capture group
console.log(replace)

//Coding Challenge

let hello = "  Hello, World!  "
let wsRegex = /^\s+|\s+$/g
let resultsC = hello.replace(wsRegex, '')
console.log(resultsC)