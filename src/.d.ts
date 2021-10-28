declare module "html-elemnets" {
    type HTMLLang = "pl" | "en";
    type HTMLPage = string;
    type HTMLComponent = string;
    type HTMLUrl = string;
    type HTMLButtonData = {
        text: string;
        href?: string;
        onclick?: string;
    };

    type Social = {
        name: string;
        href: HTMLUrl;
        icon: HTMLUrl;
    };
}
