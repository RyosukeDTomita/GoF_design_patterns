import AbstractDisplay from "./AbstractDisplay.js";

class StringDisplay extends AbstractDisplay {
  private string: string; // 表示すべき文字列
  private width: number; // 文字列の表示幅

  constructor(string: string) {
    super();
    this.string = string;
    this.width = string.length;
  }

  open(): void {
    this.printLine();
  }

  print(): void {
    console.log(`|${this.string}|`);
  }

  close(): void {
    this.printLine();
  }

  // openとcloseから呼び出されて"+----+"という文字列を表示するメソッド
  private printLine(): void {
    console.log(`+${"-".repeat(this.width)}+`);
  }
}

export default StringDisplay;
