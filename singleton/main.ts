import { Singleton } from './Singleton.js';
import { SingletonEnum } from './SingletonEnum.js';

function main(): void {
  // 通常のシングルトンの利用例
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  console.log('Are both instances equal?', instance1 === instance2);

  // NOTE: Enumによるシングルトンはnode.jsでは作れない
}

// ESモジュールでのエントリーポイントチェック
if (import.meta.url === new URL(process.argv[1], "file:").href) {
  main();
}
