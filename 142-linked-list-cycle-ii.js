var detectCycle = function(head) {
    if(!head)return null;
    
    let h = head, t = head;
    while(true){
        h = h.next;
        t = t.next;
        if(h === null || h.next === null){
            return null;
        } else {
        h = h.next;    
        }
        
        if(h === t){
            break;
        }
    }
    let p1 = head, p2 = h;
    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
        }
    return p1;
};