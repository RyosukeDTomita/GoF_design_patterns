import { Visitor } from "./Visitor.js";
import { File } from "./File.js";
import { Directory } from "./Directory.js";

/**
 * VisitorパターンのConcreteVisitor(具体的訪問者)
 * FileとDirectoryの両方を訪問する具体的な実装を持つ
 */
export class ListVisitor extends Visitor {
  private currentdir: string = "";

  /**
   * node.jsにはオーバーロードがないため、FileとDirectoryの両方を受け取る形にした。
   * @param entry
   */
  visit(entry: File | Directory): void {
    if (entry instanceof File) {
      console.log(this.currentdir + "/" + entry.getName() + " (" + entry.getSize() + ")");
    } else if (entry instanceof Directory) {
      console.log(this.currentdir + "/" + entry.getName() + " (" + entry.getSize() + ")");
      const savedir = this.currentdir;
      this.currentdir = this.currentdir + "/" + entry.getName();
      for (const e of entry) {
        e.accept(this);
      }
      this.currentdir = savedir;
    }
  }
}
