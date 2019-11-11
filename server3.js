const fs = require("fs");

fs.writeFile(
  "/Users/danivicario/Documents/sources/webmad1019-1/w4d1/quique.html",
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>${Math.random()}</h1>
  </body>
</html>
`,
  (err, data) => {
    console.log("file quique.html written");
  }
);
