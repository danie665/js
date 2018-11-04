function ArraySeq(array) {
    return array;
}

function RangeSeq(from, to) {
    sequence = []
    i = from;
    while (i <= to) {
        sequence.push(i);
        i++;
    }
    return sequence;
}

function logFive(sequence) {
    i = 0;
    while (i < 5) {
        if (sequence[i] != null)
            console.log(sequence[i]);
        i++;
    }
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
