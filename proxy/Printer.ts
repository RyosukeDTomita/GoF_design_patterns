import Printable from "./Printable";

class Printer implements Printable {
  private name: string = "";

  constructor(name?: string) {
    if (name !== undefined) {
      this.name = name;
      this.heavyJob(`Printerのインスタンス(${name})を生成中`);
    } else {
      // 重い処理
      this.heavyJob("Printerのインスタンスを生成中");
    }
  }

  setPrinterName(name: string): void {
    this.name = name;
  }

  getPrinterName(): string {
    return this.name;
  }

  print(s: string): void {
    console.log(`=== ${this.name} ===`);
    console.log(s);
  }

  private heavyJob(msg: string): void {
    process.stdout.write(msg);
    for (let i = 0; i < 5; i++) {
      process.stdout.write(".");
    }
    console.log("完了。");
  }
}

export default Printer;
