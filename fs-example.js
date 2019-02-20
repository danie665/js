let {readFile} = require("fs");
readFile("file.txt", "utf8", (error, text) => {
    if (error) throw error;
    console.log("The file contains:", text);
});

const {readFile} = require("fs");
readFile("file.txt", (error, buffer) => {
    if (error) throw error;
    console.log("The file contained", buffer.length, "bytes.",
                "The first byte is:", buffer[0]);
});

