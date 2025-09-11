/**
 * Singletonパターン(遅延初期化)
 */
class SingletonLazy {
  private static singleton: SingletonLazy;

  /**
   * constructorはprivateにして、外部からnewできないようにする
   */
  private constructor() {
    console.log("Singleton (Lazy initialization) instance created");
  }

  /**
   * 遅延初期化のため、初回呼び出し時にインスタンスを生成する
   */
  public static getInstance(): SingletonLazy {
    console.log("getInstance (Lazy initialization) called");
    if (!this.singleton) {
      this.singleton = new SingletonLazy();
    }
    return this.singleton;
  }
}

export { SingletonLazy };
