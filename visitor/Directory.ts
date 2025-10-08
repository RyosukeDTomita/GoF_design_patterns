import { Entry } from "./Entry.js";
import { Visitor } from "./Visitor.js";

/**
 * Entryのサブクラスで、ディレクトリを表す
 */
export class Directory extends Entry implements Iterable<Entry> {
    private name: string;
    private directory: Entry[] = [];


    /**
     * Visitor型を受け取り、そのvisitメソッドを呼び出す。
     * @param visitor VisitorパターンのVisitor役のインスタンス
     */
    override accept(visitor: Visitor): void {
        visitor.visit(this);
    }

    constructor(name: string) {
        super();
        this.name = name;
    }

    override getName(): string {
        return this.name;
    }

    override getSize(): number {
        let size = 0;
        for (const entry of this.directory) {
            size += entry.getSize();
        }
        return size;
    }

    add(entry: Entry): Entry {
        this.directory.push(entry);
        return this;
    }

    [Symbol.iterator](): Iterator<Entry> {
        return this.directory[Symbol.iterator]();
    }

}