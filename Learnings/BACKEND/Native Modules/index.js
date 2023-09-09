const fs = require('fs');

// writing the file
fs.writeFile("message1.txt", "hello from node", (err) => {
    if (err) throw err;
    console.log("the file has been saved!!");
});

// reading the file

fs.readFile("./message1.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
