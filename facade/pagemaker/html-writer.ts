import * as fs from 'fs';

/**
 * HTMLファイルを作成する
 */
export class HtmlWriter {
    private writer: fs.WriteStream;
    private content: string[] = [];

    constructor(filepath: string) {
        this.writer = fs.createWriteStream(filepath);
    }

    public title(title: string): void {
        this.content.push('<!DOCTYPE html>');
        this.content.push('<html>');
        this.content.push('<head>');
        this.content.push(`<title>${title}</title>`);
        this.content.push('</head>');
        this.content.push('<body>');
        this.content.push(`<h1>${title}</h1>`);
    }

    public paragraph(msg: string): void {
        this.content.push(`<p>${msg}</p>`);
    }

    public link(href: string, caption: string): void {
        this.paragraph(`<a href="${href}">${caption}</a>`);
    }

    public mailto(mailaddr: string, username: string): void {
        this.link(`mailto:${mailaddr}`, username);
    }

    public close(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.content.push('</body>');
            this.content.push('</html>');
            
            this.writer.write(this.content.join('\n'), (err) => {
                if (err) {
                    reject(err);
                } else {
                    this.writer.end(() => {
                        resolve();
                    });
                }
            });
        });
    }
}