interface Printable {
  setPrinterName(name: string): void;
  getPrinterName(): string;
  print(s: string): void;
}

export default Printable;