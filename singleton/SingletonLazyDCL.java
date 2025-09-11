/**
 * シングルトンパターンの遅延初期化版 (Double-Checked Locking)
 */
public class SingletonLazyDCL {
    // DCLを実装するにあたり、volatileを付与して、スレッド間の可視性を確保する。CPUやコンパイラの最適化により、メモリ確保 --> コンストラクタの呼び出し --> instance変数に参照を設定の順番がかわらないようにしている。
    private static volatile SingletonLazyDCL instance;
    
    /**
     * コンストラクタをprivateにすることで、外部からのインスタンス化を防止
     */
    private SingletonLazyDCL() {
        System.out.println("SingletonLazyDCL instance created");
    }
    /**
     * Double-Checked Locking (DCL)を使用した遅延初期化
     * トップレベルでsynchronizedブロックを使わないことで初回アクセス時のみ同期化を行い、2回目以降のアクセスは同期化のオーバーヘッドを避けることができる
     * @return SingletonLazyDCL
     */
    public static SingletonLazyDCL getInstance() {
        System.out.println("getInstance (Lazy DCL) called");
        if (instance == null) {
            synchronized (SingletonLazyDCL.class) {
                if (instance == null) {
                    instance = new SingletonLazyDCL();
                }
            }
        }
        return instance;
    }

}