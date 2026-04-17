import Printable from "./Printable";
import Printer from "./Printer";
import PrinterProxy, { registerClass } from "./PrinterProxy";

registerClass("Printer", Printer);

function main(): void {
  const p: Printable = new PrinterProxy("Alice", "Printer");
  console.log(`名前は現在${p.getPrinterName()}です。`);
  p.setPrinterName("Bob");
  console.log(`名前は現在${p.getPrinterName()}です。`);
  // ここまではPrinterのインスタンスは生成されていない
  p.print("Hello, world.");
}

main();
