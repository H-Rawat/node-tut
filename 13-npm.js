// npm -> global command, comes with node
// npm --version -> to check the node version

// local dependency - use it only in this particular project
// npm i 'packageName'

// global dependency - use it in any project
// npm install -g 'packageName'

// package.json -> stores important info about the project/packages
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// we would add testing packages, linting, formatting to dev dependencies
console.log("hello");
