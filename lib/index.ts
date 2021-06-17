import { FileTotals } from "./interfaces";
import JSLanguageUtils from "./languages/js";

const processCountsForFile = (
  extension: string,
  data: string,
  fileName: string
): FileTotals | undefined => {
  switch (extension) {
    case ".js":
      return JSLanguageUtils.processJSFile(data, fileName);

    default:
      console.log(`Stats for ${fileName}: This language is not yet supported.`);
      break;
  }
};

const CheckCounts = {
  processCountsForFile,
};

export default CheckCounts;
