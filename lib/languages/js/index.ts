import { FileTotals } from "../../interfaces";
import LanguageUtils from "../../languages/index";
import JS_TOKENS from "./tokens";

const isValidCodeLine = (line: string): boolean => {
  return LanguageUtils.isValidCodeLine(JS_TOKENS.VALID_JS_TOKENS, line);
};

const isCommentLine = (line: string) => {
  return LanguageUtils.isCommentLine(JS_TOKENS.COMMENT_JS_TOKENS, line);
};

const isBlankLine = (line: string) => {
  return LanguageUtils.isBlankLine(line);
};

const processJSFile = (data: string, fileName: string) => {
  const lines = data.split(/\n/);

  let [blankLines, commentLines, codeLines, totalLines] = [0, 0, 0, 0];

  for (let line of lines) {
    line = line.trim();
    // console.log(`Processing line: ${line}`);
    if (isBlankLine(line)) {
      blankLines++;
      // console.log(`Hit blank line`);
    } else if (isCommentLine(line)) {
      commentLines++;
      // console.log(`Hit comment line`);
    } else if (isValidCodeLine(line)) {
      codeLines++;
      // console.log(`Hit code line`);
    } else {
      codeLines++; // in absence of AST related logic, its safe to assume that any line not of a comment type or blank type is of code type(valid/invalid). Since we are not building an AST here, we cannot capture methods of a class for ex. so we assume it is of code type
      // console.log(`Hit code line`);
    }

    totalLines++;
  }

  console.log(
    `Here are the stats for the file ${fileName}:  commented lines: ${commentLines}, blank lines: ${blankLines}, lines of code: ${codeLines}, total lines: ${totalLines}`
  );

  const result: FileTotals = {
    filePath: fileName,
    totals: {
      commentLines,
      blankLines,
      codeLines,
      totalLines,
    },
  };

  return result;
};

const JSLanguageUtils = {
  isValidCodeLine,
  isCommentLine,
  isBlankLine,
  processJSFile,
};

export default JSLanguageUtils;
