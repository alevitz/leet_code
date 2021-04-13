var levelOrder = function(root) {
    
    let orderArr = []; 
    
    function order(node, depth = 0){
        if(!node){    
        return;
        }
        
        if(!orderArr[depth]){
        orderArr[depth] = [];
        }
        orderArr[depth].push(node.val);
        depth++;        
        if(node.left){
            order(node.left, depth);
        }
        if(node.right){
            order(node.right, depth);
        }               
    }
    
    order(root);
    
    return orderArr;
};