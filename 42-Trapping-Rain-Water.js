
function trappingWater(arr){
    let maxL = 0, maxR = 0, pLeft = 0, pRight = arr.length - 1, totalWater = 0;

    while(pLeft < pRight){

        if(arr[pLeft] <= arr[pRight]){
            let height = arr[pLeft];      
            if(height >= maxL){
                maxL = height;
                pLeft++;
            } else {
                let currentWater = maxL - height;//
                totalWater += currentWater;
                pLeft++;
            }
        } else {
            let height = arr[pRight]; 
            if(height >= maxR){
                maxR = height;
                pRight--;
            } else {
                let currentWater = maxR - height;
                totalWater += currentWater;
                pRight--;
            }
        }
    }
return totalWater;
}


