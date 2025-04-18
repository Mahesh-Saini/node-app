import http from "node:http";
import fs from "node:fs";
import url, { URL } from "node:url";
import path from "node:path";

// SRC DIRECTORY PATH
const srcPathname = path.dirname(url.fileURLToPath(import.meta.url));

// READ HTML TEMPLATES
const homeHtml = fs.readFileSync(
  path.join(srcPathname, "/templates/index.html"),
  "utf-8"
);
const productHtml = fs.readFileSync(
  path.join(srcPathname, "/templates/product.html"),
  "utf-8"
);
const productDetailHtml = fs.readFileSync(
  path.join(srcPathname, "/templates/productDetail.html"),
  "utf-8"
);
const server = http.createServer();
server.on("request", (req, res) => {
  const { pathname } = url.parse(req.url);
  if (req.method === "GET") {
    if (pathname === "/" || pathname === "/home") {
      res.end(homeHtml);
    } else if (pathname === "/product") {
      res.end(productHtml);
    } else if (pathname === "/details") {
      res.end(productDetailHtml);
    } else {
      res.end("<h1>404 Not Found<h1/>");
    }
  } else if (req.method === "POST") {
    // handle post
  } else if (req.method === "PUT") {
    // handle put
  } else if (req.method === "PATCH") {
    // handle patch
  } else if (req.method === "DELETE") {
    // handle delete
  } else if (req.method === "HEAD") {
    // handle head
  } else if (req.method === "OPTIONS") {
    // Handle options method
  } else {
    res.statusCode = 404;
    res.statusMessage = "Unhandled Request Method";
    res.end("Not Found!");
  }
});

server.listen(5555, "127.0.0.1", () => {
  console.log("Server running on port 5555");
});
