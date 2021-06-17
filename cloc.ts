import { command, positional, binary, run } from "cmd-ts";
import fs from "fs";
import path from "path";
import CheckCounts from "./lib/index";

const cloc = command({
  name: "cloc",
  args: {
    file: positional(),
  },
  async handler({ file }) {
    const extension = path.extname(file);
    const fileName = path.basename(file);
    console.log(extension);
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        return console.log(err);
      } else {
        return CheckCounts.processSingleFile(extension, data, fileName);
      }
    });
  },
});

run(binary(cloc), process.argv);
