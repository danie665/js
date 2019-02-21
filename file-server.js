const {createServer} = require("http");
const methods = Object.create(null);

// Create listener
createServer((request, response) => {
  let handler = methods[request.method] || notAllowed;
  handler(request)
    .catch(error => {
      if (error.status != null) return error;
      return {body: String(error), status: 500}
    })
    .then(({body, status = 200, type = "text/plain"}) => {
      response.writeHead(status, {"Content-Type": type});
      if (body && body.pipe) body.pipe(response);
      else response.end(body);
    });
}).listen(8000);

// Reject invalid requests
async function notAllowed(request) {
  return {
    status: 405,
    body: `Method ${request.method} not allowed. `
  };
}
