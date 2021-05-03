var isValid = function(s) {
    
   let matchObj = {
       "(": ')',
       "{": "}",
       "[": "]"
   }
   
   let stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" ||s[i] === "["){
            stack.push(s[i]);
        } else {
            let left = stack.pop();
            let matchingRight = matchObj[left]; 
            if(matchingRight !== s[i]){
                return false;
            }
        }
    }
    if(stack.length === 0)return true;
    
    return false;
    
};