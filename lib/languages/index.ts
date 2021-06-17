import { SyntaxToken } from "../interfaces"


const isValidCodeLine = (validCodeTokens: SyntaxToken[], line: string) : boolean => {
  return validCodeTokens.some(codeToken => line.startsWith(codeToken.value.toString()));
}

const isCommentLine = (commentTokens: SyntaxToken[], line: string) => {
  return commentTokens.some(codeToken => line.startsWith(codeToken.value.toString()));
}

const isBlankLine = (line: string) => {
  return line.trim().length === 0;
}


const LanguageUtils = {
  isValidCodeLine,
  isCommentLine,
  isBlankLine
}

export default LanguageUtils;