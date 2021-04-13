function typedString(strA, strB){
    let p1 = strA.length - 1;
    let p2 = strB.length - 1;
    let p1Count = 0;
    let p2Count = 0;

    while(p1 >= 0 || p2 >= 0){
        if(strA[p1] !== '#' && strB[p2] !== '#'){
            if(p1Count === 0 && p2Count === 0){
                if(strA[p1] === strB[p2]){
                    p1--;
                    p2--;
                } else {
                    return false;                                 
                }
            } else {
                if(p1Count > 0){
                    p1--;
                    p1Count -= 1;
                }
                if(p2Count > 0){
                    p2--;
                    p2Count -= 1;
                }
            }
        } else {
            if(strA[p1] === '#'){
                p1Count++;
                p1--;
            }
            if(strB[p2] === '#'){
                p2Count++;
                p2--;
            }
        }
    }
    return true;

}