var mergeTwoLists = function(l1, l2) {
    
    let firstNode = new ListNode(0, null);
    let prev = firstNode;
 
    while(l1 && l2){
        if(l1.val <= l2.val){
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    while(l1){
        prev.next = l1;
        l1 = l1.next;
        prev = prev.next;
    }
    
    while(l2){
        prev.next = l2;
        l2 = l2.next;
        prev = prev.next;
    }
    return firstNode.next;
    
    }