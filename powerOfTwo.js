var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false;
    }

    if (n === 1 || n === 2) {
        return true;
    }

    let div = n / 2;

    if (Number.isInteger(div)) {
        return isPowerOfTwo(div);
    } else {
        return false;
    }


};
