// var http = require("http");
// var fs = require("fs");
// var url = require("url");

// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var fileName = "." + q.pathname;
//     fs.readFile(fileName, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

var num = 1.55;
var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
  str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
var prettyNum = num.toFixed(2);
console.log(prettyNum);

