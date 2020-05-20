import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import { Hello } from "../client/src/app";

const PORT = 8081;
const app = express();
const router = express.Router();

const serverRenderer = (req: any, res: any) => {
  fs.readFile(path.resolve("./dist/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<Hello />)}</div>`
      )
    );
  });
};

router.use("*", serverRenderer);

// Should be first
app.use(router);

app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});