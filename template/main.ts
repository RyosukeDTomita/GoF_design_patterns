import AbstractDisplay from "./AbstractDisplay.js";
import CharDisplay from "./CharDisplay.js";
import StringDisplay from "./StringDisplay.js";

function main(): void {
  const d1: AbstractDisplay = new CharDisplay("H");

  const d2: AbstractDisplay = new StringDisplay("Hello, world.");

  // d1,d2とも、すべて同じAbstractDisplayのサブクラスのインスタンスのため、継承したdisplayメソッドを呼び出すことができる
  // 実際の動作は個々のクラスCharDisplayやStringDisplayで定まる
  d1.display();
  d2.display();
}

main();
