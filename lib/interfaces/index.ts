export interface SyntaxToken {
  type: string;
  value: string | number | boolean;
}

export interface Totals {
  commentLines: number;
  blankLines: number;
  codeLines: number;
  totalLines: number;
}

export interface FileTotals {
  filePath: string;
  totals: Totals;
}
