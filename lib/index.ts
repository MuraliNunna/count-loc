import JSLanguageUtils from "./languages/js";

const processJSFile = (data: string, fileName: string) => {
  const lines = data.split(/\n/);

  let [blankLines, commentLines, codeLines, totalLines] = [0, 0, 0, 0];

  for (let line of lines) {
    line = line.trim();
    console.log(`Processing line: ${line}`);
    if (JSLanguageUtils.isBlankLine(line)) {
      blankLines++;
      console.log(`Hit blank line`);
    } else if (JSLanguageUtils.isCommentLine(line)) {
      commentLines++;
      console.log(`Hit comment line`);
    } else if (JSLanguageUtils.isValidCodeLine(line)) {
      codeLines++;
      console.log(`Hit code line`);
    } else {
      codeLines++; // in absence of AST related logic, its safe to assume that any line not of a comment type or blank type is of code type(valid/invalid). Since we are not building an AST here, we cannot capture methods of a class for ex. so we assume it is of code type
      console.log(`Hit code line`);
    }

    totalLines++;
  }

  console.log(
    `Here are the stats for the file ${fileName}:  commented lines: ${commentLines}, blank lines: ${blankLines}, lines of code: ${codeLines}, total lines: ${totalLines}`
  );
};

const processSingleFile = (
  extension: string = "js",
  data: string,
  fileName: string
) => {
  switch (extension) {
    case ".js":
      return processJSFile(data, fileName);

    default:
      console.log(`This language is not yet supported.`);
      break;
  }
};

const CheckCounts = {
  processSingleFile,
};

export default CheckCounts;
