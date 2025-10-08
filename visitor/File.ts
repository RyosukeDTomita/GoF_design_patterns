import { Entry } from "./Entry.js";
import { Visitor } from "./Visitor.js";

/**
 * Entryのサブクラスで、ファイルを表す
 */
export class File extends Entry {
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    super();
    this.name = name;
    this.size = size;
  }

  override getName(): string {
    return this.name;
  }

  override getSize(): number {
    return this.size;
  }

  override accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}