import { string } from "cmd-ts";
import { SyntaxToken } from "../../interfaces";

const CLASS_TOKENS: SyntaxToken[] = [
  {
    type: "string",
    value: "class",
  },
  {
    type: "string",
    value: "super",
  },
  {
    type: "string",
    value: "public",
  },
  {
    type: "string",
    value: "protected",
  },
  {
    type: "string",
    value: "constructor",
  },
  {
    type: "string",
    value: "static",
  },
  {
    type: "string",
    value: "this",
  },
];

const FUNCTION_TOKENS: SyntaxToken[] = [
  {
    type: "string",
    value: "function",
  },
  {
    type: "string",
    value: "{",
  },
  {
    type: "string",
    value: "}",
  },
  {
    type: "string",
    value: "(",
  },
  {
    type: "string",
    value: ")",
  },
  {
    type: "string",
    value: "return",
  },
  {
    type: "string",
    value: "yield",
  },
];

const LANG_TOKENS: SyntaxToken[] = [
  {
    type: "string",
    value: "for",
  },
  {
    type: "string",
    value: "do",
  },
  {
    type: "string",
    value: "while",
  },
  {
    type: "string",
    value: "break",
  },
  {
    type: "string",
    value: "switch",
  },
  {
    type: "string",
    value: "case",
  },
  {
    type: "string",
    value: "if",
  },
  {
    type: "string",
    value: "else",
  },
  {
    type: "string",
    value: "try",
  },
  {
    type: "string",
    value: "catch",
  },
  {
    type: "string",
    value: "throw",
  },
  {
    type: "string",
    value: "const",
  },
  {
    type: "string",
    value: "let",
  },
  {
    type: "string",
    value: "var",
  },
  {
    type: "string",
    value: "enum",
  },
  {
    type: "string",
    value: "export",
  },
  {
    type: "string",
    value: "import",
  },
  {
    type: "string",
    value: "Promise",
  },
  {
    type: "string",
    value: "await",
  },
  {
    type: "string",
    value: "finally",
  },
  {
    type: "string",
    value: "delete",
  },
];

const VALID_JS_TOKENS: SyntaxToken[] = [
  ...FUNCTION_TOKENS,
  ...LANG_TOKENS,
  ...CLASS_TOKENS,
];

const COMMENT_JS_TOKENS: SyntaxToken[] = [
  {
    type: "string",
    value: "//",
  },
  {
    type: "string",
    value: "/*",
  },
  {
    type: "string",
    value: "*/",
  },
  {
    type: "string",
    value: "*",
  },
];

const JS_TOKENS = {
  VALID_JS_TOKENS,
  COMMENT_JS_TOKENS,
};

export default JS_TOKENS;
