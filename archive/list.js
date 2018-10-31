function arrayToList(array) {
    /* convert an array to a list */
    myList = null;
    i = 0
    while (i < array.length) {
        newList = prepend(array[array.length-(i+1)], myList);
        myList = newList;
        i++;
    }
    return myList;
}
function listToArray(list) {
    /* create an array from a list */
    myArray = [];
    myArray = _listToArray(list, myArray);
    return myArray;
}
function _listToArray(list, array) {
    /* recursive helper function */
    myArray = array;
    if (list == null) {
        return myArray;
    }
    myArray.push(list["value"]);
    return _listToArray(list["rest"], myArray);
}
function prepend(newValue, oldList) {
    /* prepend element to a list */
    newList = {
        "value": newValue,
        "rest": oldList,
    }
    return newList;
}
function nth(list, x){
    /* get the nth element from a list */
    if (list == null) {
        return null;
    }
    if (x == 0) {
        return list["value"];
    }
    return nth(list["rest"], x-1);
}
/* create sample data */
myArray = [1, 2, 3, 4];
console.log(myArray);
/* test arrayToList */
myList = arrayToList(myArray);
console.log(myList);
/* test listToArray */
myArray = listToArray(myList);
console.log(myArray);
/* system tests */
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
