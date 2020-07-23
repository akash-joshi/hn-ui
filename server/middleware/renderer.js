import React from "react";
import ReactDOMServer from "react-dom/server";
// import axios from "axios";
import { ServerStyleSheet } from "styled-components";

// import our main App component
import App from "../../src/App";

const path = require("path");
const fs = require("fs");

export default (req, res) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

  fs.readFile(filePath, "utf8", async (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    // const storiesResponse = await axios.get(
    //   `https://hn.algolia.com/api/v1/search?tags=story`
    // );

    // console.log(storiesResponse.data.hits);

    const sheet = new ServerStyleSheet();

    const styles = sheet.getStyleTags();

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(<App />)
    );

    console.log(html)

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root"><head>${styles}</head>${html}</div>`)
    );
  });
};
