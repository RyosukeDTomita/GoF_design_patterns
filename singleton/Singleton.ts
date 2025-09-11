/**
 * Singletonパターン(即時初期化)
 */
class Singleton {
  private static singleton: Singleton = new Singleton();
  private string: word = "World";
  /**
   * constructorはprivateにして、外部からnewできないようにする
   */
  private constructor() {
    console.log("Singleton (Eager initiation) instance created");
  }

  public static getInstance(): Singleton {
    console.log("getInstance (Eager initiation) called");
    return this.singleton;
  }

  public setWord(word: string) {
    this.string = word;
  }

  public hello() {
    console.log(`Hello, ${this.string}!`);
  }
}

export { Singleton };
