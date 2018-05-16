// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// helper function to reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

function matchWord(str) {
  let s = str;
  if (s === '') return true;

  // convert everything to lowercase
  s = s.toLowerCase();

  // split the string by characters that are not a-z (+ is greedy match)
  const wordArray = s.split(/[^a-z]+/);
  // console.log(wordArray);

  const stack = [];

  wordArray.forEach((currWord) => {
    // when splitting we might get an element that is '' at the beg and end of array
    if (currWord === '') return;

    // check against the reverse of the word on the top of the stack
    if ((stack.length === 0) || (stack[stack.length - 1] !== reverseString(currWord))) {
      stack.push(currWord);
    } else if ((stack[stack.length - 1] === reverseString(currWord))) {
      // we have a match, pop the top of the stack
      let t = stack.pop();
      // console.log(t);
    }
  });


  // if our stack is empty, that means we've matched all words
  if (stack.length !== 0) return false;

  return true;

}

// console.log(matchWord("%%$@$while  try ! yrt  for if_fi rof #*#  elihw"));
// console.log(matchWord("__ENDDNE__"));
// console.log(matchWord("for__if__rof__fi"));
// console.log(matchWord("IF()()fi[]"));

module.exports = matchWord;
