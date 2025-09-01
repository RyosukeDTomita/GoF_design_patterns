import * as path from 'path';
import { Database } from './database.js';
import { HtmlWriter } from './html-writer.js';

export class PageMaker {
    private constructor() {
    }

    public static async makeWelcomePage(mailaddr: string, filename: string): Promise<void> {
        try {
            const mailprop = Database.getProperties('maildata');
            const username = mailprop.get(mailaddr) || 'Unknown';
            
            const filepath = path.join(process.cwd(), filename);

            // Facadeパターンのサンプル。複数のクラスやメソッドが絡み合ったシステムを直接操作する代わりに、Facade（ファサード）クラスを通じてアクセスすることで、クライアントは複雑さを隠蔽されたシンプルな操作を行うことができる。
            const writer = new HtmlWriter(filepath);
            writer.title(`${username}'s web page`);
            writer.paragraph(`Welcome to ${username}'s web page!`);
            writer.paragraph('Nice to meet you!');
            writer.mailto(mailaddr, username);
            
            await writer.close();
            console.log(`${filename} is created for ${mailaddr} (${username})`);
        } catch (error) {
            console.error('Error creating welcome page:', error);
            throw error;
        }
    }

}