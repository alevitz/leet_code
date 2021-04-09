var twoSum = function(nums, target) {
    
  let diffObj = {};

for(let i = 0; i < nums.length; i++){
   let diff = target - nums[i];
   
  if(diffObj[nums[i]] >= 0){
      return [diffObj[nums[i]], i];
  }   
  diffObj[diff] = i;
}

return null;
};