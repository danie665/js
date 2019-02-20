const {createServer} = request("http");
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type"; "test/html"});
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");
