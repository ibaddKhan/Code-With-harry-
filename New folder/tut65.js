// Sycnchronous or Blocking:
// -line by line ecexution;


// // Asycnchronous or Non-blocking:
// -line by line ecexution not guaranteed,
// -call backs will fire;


const fs = require("fs");

fs.readFile("d.txt", "utf-8", (a, b)=>{
    console.log(a, b);
});
console.log("This is a message");
