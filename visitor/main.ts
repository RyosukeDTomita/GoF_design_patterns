import { Directory } from './Directory.js';
import { File } from './File.js';
import { ListVisitor } from './ListVisitor.js';

function main() {
  // ディレクトリ構造の作成
  const rootDir = new Directory('root');
  const bindir = new Directory('bin');
  rootDir.add(bindir);
  const tmpdir = new Directory('tmp');
  rootDir.add(tmpdir);
  const usrdir = new Directory('usr');
  rootDir.add(usrdir);

  // binディレクトリにファイルを追加
  bindir.add(new File('vi', 10000));
  bindir.add(new File('latex', 20000));

  // rootディレクトリの内容を表示
  rootDir.accept(new ListVisitor());

  // /usrにsigmaディレクトリを追加し、ファイルを追加
  const sigma = new Directory('sigma');
  usrdir.add(sigma);
  sigma.add(new File('The Human Instrumentality Project.html', 100));

  // 再度rootディレクトリの内容を表示
  rootDir.accept(new ListVisitor());
}

// ESモジュールでのエントリーポイントチェック
if (import.meta.url === new URL(process.argv[1], "file:").href) {
  main();
}