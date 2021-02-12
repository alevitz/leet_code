var searchRange = function(nums, target) {
    
    if(nums.length < 1)return [-1, -1];
    
    function binarySearch(nums, left, right, target){
        
        let middle = Math.floor((left + right)/2);
        while(left <= right){
            
            if(target === nums[middle]){
                return middle;
            } else if(target < nums[middle]){
                right = middle - 1;
                middle = Math.floor((left + right)/2);
            } else if(target > nums[middle]){
                left = middle + 1;
                middle = Math.floor((left + right)/2);
            }
        }
        return -1;
    }
    
    let firstPos = binarySearch(nums, 0, nums.length-1, target);
    
    let start = firstPos;
    let end = firstPos;
    let temp1, temp2;   
    
    if(firstPos === -1){
        return [-1, -1];
    }
    
    while(start !== -1){
        temp1 = start;
       start = binarySearch(nums, 0, temp1-1, target);
    }
    
    start = temp1;
    
    while(end !== -1){
        temp2 = end;
        end = binarySearch(nums, temp2+1, nums.length-1, target);
    }
    
    end = temp2;
    
    return [start, end];
    
};