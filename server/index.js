import express from "express";
import serverRenderer from "./middleware/renderer";
const expressStaticGzip = require("express-static-gzip");

const PORT = process.env.PORT || 3000;
const path = require("path");

// initialize the application and create the routes
const app = express();
const router = express.Router();

// root (/) should always serve our server rendered page
router.use("^/$", serverRenderer);

router.use("/page/:id", serverRenderer);

router.use(
  expressStaticGzip(path.join(__dirname, "build"), {
    enableBrotli: true, // only if you have brotli files too
  })
);

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

// tell the app to use the above rules
app.use(router);

// start the app
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});
