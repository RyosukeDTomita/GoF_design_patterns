import { File } from "./File.js";
import { Directory } from "./Directory.js";

/**
 * VisitorパターンのVisitor役の抽象クラス
 * FileとDirectoryの両方を訪問するためのvisitメソッドを宣言する。
 * NOTE: TypeScriptにはJavaのようなメソッドのオーバーロードがないため、
 * FileとDirectoryの両方を受け取るvisitメソッドをConcreteVisitorで実装する。
 */
export abstract class Visitor {
  abstract visit(entry: File | Directory): void;
}