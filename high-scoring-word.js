/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
*/

function high(sentence) {
  // set each word in sentence to toLowerCase and split to an array
  var arr = sentence.toLowerCase().split(' ')
  // initialize the value of each word to zero
  var longestWordValue = 0
  // initialize the longest word text to blank string
  var longestWordText = ''
  // iterate over each word and sum value of each letter
  arr.forEach(function(word) {
    var sum = 0
      for (let i=0; i <word.length; i++){
        sum += word.charCodeAt(i) -96
        // compare value of current word to the longest word value and assign longestWordText to that word
          if (sum > longestWordValue) {
            longestWordValue = sum
            longestWordText = word
          }
        }
    });
    return(longestWordText)
  }

console.log(high("what is Your name"))
