import { PageMaker } from "./pagemaker/page-maker.js";

async function main(): Promise<void> {
  try {
    await PageMaker.makeWelcomePage("sigma@example.com", "welcome_sigma.html");
  } catch (error) {
    console.error("Error in main:", error);
  }
}

// ESモジュールでのエントリーポイントチェック
if (import.meta.url === new URL(process.argv[1], "file:").href) {
  main().catch(console.error);
}
