const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

// default 64kb
// last buffer - remainder
// highwatermakr - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark:90000})
// const stream = createReadStream('./content/big.txt', {encoding:90000})

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
