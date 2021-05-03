var minRemoveToMakeValid = function(s) {
        
    let stack = [];
  
    let sArr = s.split("");
    
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] === '('){
            stack.push(i);
        } else if(sArr[i] === ')'){
            if(stack.length > 0){
                stack.pop();
            } else {
                sArr[i] = "";
            }
        }
    }
    
    while(stack.length > 0){
        let idx = stack.pop();
        sArr[idx] = "";
    }
    
    return sArr.join('');
};