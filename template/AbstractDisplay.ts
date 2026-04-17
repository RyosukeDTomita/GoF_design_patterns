// open, print, closeはサブクラスに実装をまかせる抽象メソッド
abstract class AbstractDisplay {
  abstract open(): void;
  abstract print(): void;
  abstract close(): void;

  /**
   * displayの内部メソッドであるopen,print,closeを実装クラスで切り替える。
   */
  display(): void {
    this.open();
    for (let i = 0; i < 5; i++) {
      this.print();
    }
    this.close();
  }
}

export default AbstractDisplay;
