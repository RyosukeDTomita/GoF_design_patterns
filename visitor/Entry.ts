import { Visitor } from "./Visitor.js";

/**
 * Visitorパターンに適用させるための抽象クラス
 * Element(要素)としての訪問先を表す役も担っている。
 */
export abstract class Entry {
  abstract getName(): string;
  abstract getSize(): number;
  // NOTE: Javaで書く場合にはacceptメソッドをElementインターフェースから継承する形を取る。
  // しかし、TypeScriptでは、抽象クラスを継承する場合には必ず全ての抽象メソッドを実装する必要がある。
  // そのため、Elementインターフェースを作成せず、Entryクラスにacceptの抽象メソッドを作成した。
  abstract accept(visitor: Visitor): void;
}
