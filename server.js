const { createServer, request } = require("http");
const { parse } = require("url");
const next = require("next");
// const cors = require("cors")();
const portNumber=8080;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
console.log(`Staring patternfly-next-js-stub...`);

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const items=[];
    items.push(query.item);
    console.log(`req ${pathname} query=${items} method=${req.method}`);
    handle(req, res, parsedUrl);
    // if (
    //   serverType === "both" ||
    //   (serverType === "backend" && pathname.startsWith("/api")) ||
    //   (serverType === "frontend" &&
    //     (!pathname.startsWith("/api/v1") || pathname.startsWith("/_next")))
    // ) {
    //   if (serverType === "backend" || pathname.startsWith("/api/auth")) {
    //     console.log(`CORS API req ${req.method} ${req.url}`);
    //     runMiddleware(req, res, cors).then(() => handle(req, res, parsedUrl));
    //   } else {
    //     console.log(`req ${req.method} ${req.url}`);
    //     handle(req, res, parsedUrl);
    //   }
    // } else {
    //   console.log (`404 ${req.url}`)
    //   res.writeHead(404, "Not found");
    //   res.end();
    // }
  }).listen(portNumber, (err) => {
    if (err) throw err;
    console.log(`> Ready app on http://localhost:${portNumber}`);
  });
});
