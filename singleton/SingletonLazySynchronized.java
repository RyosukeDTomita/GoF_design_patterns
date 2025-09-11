public class SingletonLazySynchronized {
    private static SingletonLazySynchronized instance;
    /**
     * コンストラクタをprivateにすることで、外部からのインスタンス化を防止
     */
    private SingletonLazySynchronized() {
        System.out.println("SingletonLazySynchronized instance created");
    }
    /**
     * NOTE: synchronizedををつけないと、初回の同時アクセス時に複数インスタンスが生成される可能性がある
     * @return SingletonLazySynchronized
     */
    public static synchronized SingletonLazySynchronized getInstance() {
        System.out.println("getInstance (Lazy Synchronized) called");
        if (instance == null) {
            instance = new SingletonLazySynchronized();
        }
        return instance;
    }

}
