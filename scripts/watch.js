const { watch } = require("fs");
const { join } = require("path");
const { spawn } = require("child_process");
const { stdout } = require("process");

const DIR = "./doc";

function flush() {
  for (let i = 0; i < stdout.rows; i++) {
    stdout.cursorTo(0, i);
    stdout.clearLine();
  }
  stdout.cursorTo(0, 0);
  console.log("watching...");
}

(() => {
  flush();
  watch(DIR, (_, filename) => {
    flush();
    spawn("./node_modules/.bin/textlint", ["--fix", join(DIR, filename)], {
      stdio: "inherit"
    });
  });
})();
