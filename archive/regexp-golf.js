// Fill in the regular expressions

// car and cat
verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

// pop and prop
verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

// ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

// any word ending in ious
verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

// a whitespace character followed by a period, comma, colon, or semicolon
verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]);

// a word longer than six letters
verify(/\w{7}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

// a word without the letter e or E
verify(/\b[^\We]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}
