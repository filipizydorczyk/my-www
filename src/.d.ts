declare module "html-elemnets" {
    type HTMLLang = "pl" | "en";
    type HTMLPage = string;
    type HTMLComponent = string;
    type HTMLButtonData = {
        text: string;
        href?: string;
        onclick?: string;
    };
}
