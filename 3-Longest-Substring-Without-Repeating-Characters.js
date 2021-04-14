
//use a sliding window to represent the current substring
// the size of the window will be based on new chars, and chars we've
//already seen before
// our screen chars hashmap keeps track of what chars we've seen, 
//and the index we saw them at


//use sliding window by inserting chars not seen yet into obj and index as val
//once you come upon a char you've seen already, move up your left pointer
//to that index + 1 and update the index where that char was last seen again.
//continue until you get to the end of the string and return the max unique length
//get the max length by get the distance between left and right pointers




function longestSubStr(s){

  let charsSeen = {};
  let max = 0;
  let left = 0;
  
  for(let right = 0; right < s.length; right++){
      let currentChar = s[right];
      let previouslySeenCharIndex = charsSeen[currentChar];
  
      if(previouslySeenCharIndex >= left){
          left = previouslySeenCharIndex + 1;
      }
  
      charsSeen[currentChar] = right;
  
      max = Math.max(max, right - left + 1);
  }
  
  return max;
  }
