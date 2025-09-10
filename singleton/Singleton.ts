class Singleton {
  private static singleton: Singleton = new Singleton();

  /**
   * constructorはprivateにして、外部からnewできないようにする
   */
  private constructor() {
    console.log("Singleton instance created");
  }

  public static getInstance(): Singleton {
    return this.singleton;
  }
}

export { Singleton };
