public class Main {
  public static void main(String[] args) {
    // シングルトン(遅延初期化、Synchronized)
    SingletonLazySynchronized instance1 = SingletonLazySynchronized.getInstance();
    SingletonLazySynchronized instance2 = SingletonLazySynchronized.getInstance();
    System.out.println(instance1 == instance2); // true

    // シングルトン(遅延初期化、Double-Checked Locking)
    SingletonLazyDCL instance3 = SingletonLazyDCL.getInstance();
    SingletonLazyDCL instance4 = SingletonLazyDCL.getInstance();
    System.out.println(instance3 == instance4); // true
  }
}
