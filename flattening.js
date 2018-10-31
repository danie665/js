/* my version */
function flatten(aarray) {
    /* flatten an aarray */
    array = [];
    i = 0;
    while (i < aarray.length) {
        j = 0;
        while (j < aarray[i].length) {
            array.push(aarray[i][j]);
            j++;
        }
        i++;
    }
    return array;
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));

/* their version */
console.log(arrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []));
