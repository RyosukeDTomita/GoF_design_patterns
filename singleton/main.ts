import { Singleton } from './Singleton.js';
import { SingletonLazy } from './SingletonLazy.js';

function main(): void {
  // シングルトン(即時初期化)の利用例
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  console.log('Are both instances equal?', instance1 === instance2);
  console.log('---');

  // シングルトン(遅延初期化)の利用例
  const instanceLazy1 = SingletonLazy.getInstance();
  const instanceLazy2 = SingletonLazy.getInstance();
  console.log('Are both instances equal?', instanceLazy1 === instanceLazy2);
  // インスタンス変数を編集してみる
  console.log('edit instance variable');
  instance1.setWord('TypeScript');
  console.log('Are both instances equal?', instanceLazy1 === instanceLazy2);
}

// ESモジュールでのエントリーポイントチェック
if (import.meta.url === new URL(process.argv[1], "file:").href) {
  main();
}
