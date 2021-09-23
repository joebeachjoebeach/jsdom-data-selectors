const fs = require("fs");
const { JSDOM } = require("jsdom");

const pageHTML = fs.readFileSync(`${__dirname}/index.html`, "utf8");

new JSDOM(pageHTML, { runScripts: "dangerously" });
