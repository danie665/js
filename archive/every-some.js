/* mine */

function every(array, condition) {
    newArray = array.filter(condition);
    if (newArray.length == array.length)
        return true;
    else
        return false;
}

function some(array, condition) {
    newArray = array.filter(condition);
    if (newArray.length > 0)
        return true;
    else
        return false;
}

/* theirs */

function everyTwo(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (!predicate(array[i]))
            return false;
    }
    return true;
}

function someTwo(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i]))
            return true;
    }
    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
