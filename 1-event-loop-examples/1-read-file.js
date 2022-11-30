// EVENT LOOP -

// JS is synchronous and single threaded
// it runs the immediate tasks first and then it runs the callback function

const { readFile } = require("fs");

console.log("started first task");
// check file path
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed the first task");
});

console.log("starting next task");
