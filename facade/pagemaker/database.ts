import * as fs from 'fs';
import * as path from 'path';

export class Database {
    private constructor() {
    }

    /**
     * @param dbname: txtファイルのPATH。簡易的に実装するため、txtファイルをデータベースとして見立てている
     * @returns Map<string, string> .txtファイルの内容。
     */
    public static getProperties(dbname: string): Map<string, string> {
        const filename = dbname + '.txt';
        const filepath = path.join(process.cwd(), filename);
        
        try {
            const content = fs.readFileSync(filepath, 'utf-8');
            const properties = new Map<string, string>();
            
            const lines = content.split('\n');
            for (const line of lines) {
                if (line.trim() === '') continue;
                const [key, value] = line.split('=');
                if (key && value) {
                    properties.set(key.trim(), value.trim());
                }
            }
            
            return properties;
        } catch (error) {
            throw new Error(`Failed to load database: ${filename}`);
        }
    }
}