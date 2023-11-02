const { Console } = require("console");
const fs = require("fs");
let text = fs.readFileSync("d.txt", "utf-8");
text = text.replace("content", "Rohan");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text);
Console