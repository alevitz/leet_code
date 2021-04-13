var maxDepth = function(root) {
    
  if(!root){
      return 0;
  }
        
     function deepest(node, depth=1){
         let left = depth;
         let right = depth;
         let leftResult = depth;
         let rightResult = depth;
         
         if(node.left){
             left++;
            leftResult = deepest(node.left,left);
         }
         if(node.right){
             right++;
             rightResult = deepest(node.right,right);
         }
             return Math.max(leftResult, rightResult);
         }           
     
     return deepest(root);
 }