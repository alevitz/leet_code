var inorderTraversal = function(root) {
  if(!root)return [];
  
  let result = [];
  
  function helper(node){
      if(node.left)helper(node.left);
      result.push(node.val);
      if(node.right)helper(node.right);
  }
  helper(root);
  return result;
};