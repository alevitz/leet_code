// var levelOrder = function(root) {
    
//     let orderArr = []; 
    
//     function order(node, depth = 0){
//         if(!node){    
//         return;
//         }
        
//         if(!orderArr[depth]){
//         orderArr[depth] = [];
//         }
//         orderArr[depth].push(node.val);
//         depth++;        
//         if(node.left){
//             order(node.left, depth);
//         }
//         if(node.right){
//             order(node.right, depth);
//         }               
//     }
    
//     order(root);
    
//     return orderArr;
// };

var levelOrder = function(root) {
    
    if(!root)return [];
    
   let result = [];
    let queue = [];
    
    queue.push(root);
    
    while(queue.length){
        let currentLevelValues =[];
        let length = queue.length, count = 0;
        while(count < length){
            let current = queue.shift();
        currentLevelValues.push(current.val);
        if(current.left)queue.push(current.left);
        if(current.right)queue.push(current.right);
            count++;
        } 
         result.push(currentLevelValues);      
    }       
    return result;
};