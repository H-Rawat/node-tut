const path = require("path");

console.log(path.sep);

// to get the normalised path with the whatever seperator the system uses
const filePath = path.join("/content", "/subfolder", "test.txt");
console.log(filePath);

// to get the file name
const base = path.basename(filePath);
console.log(base);

// gives us the abs path
const abs = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(abs);
