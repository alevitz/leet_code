var validPalindrome = function(str) {  

       let start = 0;
   let end = str.length - 1;

   while(start < end){
       if(str[start] !== str[end]){
           return validSubPalindrome(str, start + 1, end) || validSubPalindrome(str, start, end - 1);
       }
       start++;
       end--;
   }
   return true;
}

function validSubPalindrome(str, start, end){
    while(start < end){
        if (str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};