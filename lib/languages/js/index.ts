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

const JSLanguageUtils = {
  isValidCodeLine,
  isCommentLine,
  isBlankLine,
};

export default JSLanguageUtils;
