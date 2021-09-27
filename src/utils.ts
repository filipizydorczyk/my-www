import { HTMLPage, HTMLComponent, HTMLLang } from "html-elemnets";

export const renderHTML = (
    title: string,
    lang: HTMLLang,
    components: HTMLComponent[]
): HTMLPage => {
    return /* HTML */ `<!DOCTYPE html>
        <html lang="${lang}">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />

                <title>${title}</title>

                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                ${components.map((component) => `${component}`).join("\n")}
            </body>
        </html>`;
};
