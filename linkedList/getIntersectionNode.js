var getListLength = function(head) {
    let length = 0;
    while (head) {
        length += 1;
        head = head.next;
    }

    return length;
}

var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;
    let lengthA = getListLength(headA);
    let lengthB = getListLength(headB);

    if (pointerA === pointerB) {
        return pointerA;
    }

    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            if (pointerA) {
             pointerA = pointerA.next;
            }
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            if (pointerB) {
                pointerB = pointerB.next;
            }
        }
    }

    while (pointerA && pointerB && pointerA != pointerB) {

        pointerA = pointerA.next;
        pointerB = pointerB.next;


        if (!pointerA || !pointerB) {
            return null;
        }
    }

    return pointerA;
};
