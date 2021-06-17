import { command, positional, binary, run } from "cmd-ts";
import fs from "fs";
import path from "path";
import CheckCounts from "./lib/index";
import { FileTotals, Totals } from "./lib/interfaces";

const cloc = command({
  name: "cloc",
  args: {
    file: positional(),
  },
  async handler({ file }) {
    let fullPath = path.resolve(file);
    fs.lstat(fullPath, (err, stats) => {
      if (err) {
        console.log(`Error stating file/dir ${fullPath}: ${err.message}`);
      }

      if (stats.isFile()) {
        processSingleFile(fullPath);
      }

      if (stats.isDirectory()) {
        processDirectory(fullPath);
      }
    });
  },
});

let FileTotals: Totals = {
  codeLines: 0,
  commentLines: 0,
  totalLines: 0,
  blankLines: 0,
};

const updateTotalTotals = (
  fileTotals: Totals,
  { codeLines = 0, commentLines = 0, totalLines = 0, blankLines = 0 }
): Totals => {
  return {
    codeLines: fileTotals.codeLines + codeLines,
    commentLines: fileTotals.commentLines + commentLines,
    totalLines: fileTotals.totalLines + totalLines,
    blankLines: fileTotals.blankLines + blankLines,
  };
};

const processSingleFile = (filePath: string) => {
  const extension = path.extname(filePath);
  const fileName = path.basename(filePath);

  return fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    } else {
      const result = CheckCounts.processCountsForFile(
        extension,
        data,
        fileName
      );
      if (result) {
        FileTotals = updateTotalTotals(FileTotals, result.totals);
        console.log(
          `Total stats for all files so far:  commented lines: ${FileTotals.commentLines}, blank lines: ${FileTotals.blankLines}, lines of code: ${FileTotals.codeLines}, total lines: ${FileTotals.totalLines}`
        );
      }
    }
  });
};

const processDirectory = (dirPath: string) => {
  fs.readdir(dirPath, (err, filePaths) => {
    if (err) {
      console.log(`Error reading directory ${dirPath}: ${err.message}`);
    }
    console.log(filePaths);
    for (let filePath of filePaths) {
      filePath = `${dirPath}/${filePath}`;
      let stats = fs.lstatSync(filePath);

      if (stats.isFile()) {
        processSingleFile(filePath);
      }

      if (stats.isDirectory()) {
        processDirectory(filePath);
      }
    }
  });
};

run(binary(cloc), process.argv);
