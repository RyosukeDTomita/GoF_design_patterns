import AbstractDisplay from "./AbstractDisplay.js";

class CharDisplay extends AbstractDisplay {
  private ch: string; // 表示すべき文字

  constructor(ch: string) {
    super();
    this.ch = ch;
  }

  open(): void {
    // 開始文字列として"<<"を表示する
    process.stdout.write("<<");
  }

  print(): void {
    // フィールドに保存しておいた文字を1回表示する
    process.stdout.write(this.ch);
  }

  close(): void {
    // 終了文字列として">>"を表示する
    console.log(">>");
  }
}

export default CharDisplay;
