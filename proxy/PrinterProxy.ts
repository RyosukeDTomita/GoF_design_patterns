import Printable from "./Printable";

// クラス名から動的にインスタンスを生成するためのレジストリ
const classRegistry: Record<string, new () => Printable> = {};

export function registerClass(name: string, ctor: new () => Printable): void {
  classRegistry[name] = ctor;
}

class PrinterProxy implements Printable {
  private name: string;
  private real: Printable | null = null;
  private className: string;

  constructor(name: string, className: string) {
    this.name = name;
    this.className = className;
  }

  setPrinterName(name: string): void {
    if (this.real !== null) {
      this.real.setPrinterName(name);
    }
    this.name = name;
  }

  getPrinterName(): string {
    return this.name;
  }

  print(s: string): void {
    this.realize();
    this.real!.print(s);
  }

  private realize(): void {
    if (this.real === null) {
      const ctor = classRegistry[this.className];
      if (!ctor) {
        console.log(`クラス ${this.className} が見つかりません。`);
        return;
      }
      this.real = new ctor();
      this.real.setPrinterName(this.name);
    }
  }
}

export default PrinterProxy;
