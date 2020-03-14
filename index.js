const ejs = require("ejs");

ejs.renderFile("./index.ejs", { foo: "xxxx" }).then(html => console.log(html));
