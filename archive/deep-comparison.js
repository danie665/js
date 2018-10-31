function deepEqual(thing1, thing2) {
    /* my version */
    for (var key in thing1) {
        if (typeof(thing1[key]) == "object")
            return deepEqual(thing1[key], thing2[key]);
        if (thing1[key] === thing2[key])
            return true;
        else
            return false;
    }
}

function deepEqualTwo(a, b) {
    if (a === b) return true;
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object")
        return false;
    var propsInA = 0, propsInB = 0;
    for (var prop in a)
        propsInA += 1;
    for (var prop in b) {
        propsInB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }
    return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
