var maxArea = function(arr) {
    let maxArea = 0;
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while(leftPointer < rightPointer){
        let minHeight = Math.min(arr[leftPointer], arr[rightPointer]);
        let distance = rightPointer - leftPointer;
        maxArea = Math.max(minHeight * distance, maxArea);
        if(arr[leftPointer] <= arr[rightPointer]){
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    return maxArea;
};