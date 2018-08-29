function reversePrint(head) {
    if (head === null) {
        return null;
    }

    reversePrint(head.next);
    console.log(head.data)

}
