var findKthLargest = function(nums, k) {
    
    function pivotHelper(arr, start, end){
        let index = arr[start];
        let pivotIndex = start;
        
        function swap(arr, i, j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        for(let i = start + 1; i <= end; i++){
            if(arr[i] < index){
                pivotIndex++;
                swap(arr, pivotIndex, i);
            }
        }
        
        swap(arr, start, pivotIndex);
        
        return pivotIndex;
    }
    
    function quickSort(arr, left=0, right=arr.length-1){
        if(left < right){
            let pivotIndex = pivotHelper(arr, left, right);
            
            quickSort(arr, left, pivotIndex - 1);
            quickSort(arr, pivotIndex+1, right);
        }
        
        return arr;
    }
    
    quickSort(nums)
        
    return nums[nums.length - k];
    
};