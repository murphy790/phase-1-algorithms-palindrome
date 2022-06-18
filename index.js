function isPalindrome(word) {
  // Write your algorithm here
  const zauni = word.toLowerCase()
const  splitWord = zauni.split('')
  const reverseWord = splitWord.reverse()
  reverseJoined = reverseWord.join("")
  if(zauni == reverseJoined){
    return true
  }
  else{
    return false
  }

 
}
isPalindrome('Madam')


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
