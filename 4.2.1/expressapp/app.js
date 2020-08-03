// const express = require("express");
// const app = express();
// app.use(function (request, response) {
//     response.send("<h2>Hello</h2>");
//     // response.send({id:6, name: "Tom"});
//     // response.send(["Tom", "Bob", "Sam"]);
//     // response.send(Buffer.from("Hello Express"));
// });
// app.listen(3000);

//=========================================================

// const express = require("express");
// const app = express();
// app.use(function (request, response) {
//   response.send(`<!DOCTYPE html>
//   <html>
//   <head>
//       <title>Главная</title>
//       <meta charset="utf-8" />
//   </head>
//   <body>
//       <h1>Главная страница</h1>
//       <h3>Привет, Express</h3>
//   </body>
//   <html>`);
// });
// app.listen(3000);

//===========================================================

const express = require("express");
const app = express();
 
// app.use(function (request, response) {
//   response.sendFile(__dirname + "/index.html");
// });

app.use("/home/foo/bar",function (request, response) {
    response.status(404).send(`Ресурс не найден`);
  });
 
app.listen(3000);