const fs = require("fs");
const f = "../HTML/ar.html";
let h = fs.readFileSync(f, "utf8");
h = h.replace(/patternRatio="0\.9"/g, "");
fs.writeFileSync(f, h, "utf8");
const remaining = (h.match(/patternRatio/g) || []).length;
console.log("patternRatio removed. Remaining occurrences:", remaining);
