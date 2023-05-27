function isPalindrome(word) {
  // Write your algorithm here
  const splitWord = word.split("");
  const reverseWord = splitWord.reverse();
  const newWord = reverseWord.join("");
  console.log(newWord);
  if (word.toLowerCase() === newWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  1. split the word into an array
  2. reverse the array
  3. join the elements inside the array back into a string
  4. compare the original word with the new word
     -tranform both words into lower case
  5. if both words are the same return true
  6. if the words are different return false

*/

/*
  Add written explanation of your solution here
  Firts, we need to split the original string and save it in a new variable, so we can reverse each character and save it in a different variable, after this we join the caracters back into a string so we can compare the new string with the original string, to make sure the test work, we need to convert both of the string into lower case.
  If the strings are palindrome( reads the same backward or forward ) return true, if it's not return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("KAYak"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civIC"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("defiNItions"));
}

module.exports = isPalindrome;
