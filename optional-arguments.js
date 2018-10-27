alert("Hello", "Good evening", "How do you do?");

function power(base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(4));
console.log(power(4, 3));

console.log("R", 2, "D", 2);
