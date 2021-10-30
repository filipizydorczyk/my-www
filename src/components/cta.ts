import { HTMLUrl } from "html-elemnets";

export type CtaArgs = {
    background: HTMLUrl;
    href: HTMLUrl;
    text: string;
};

const Cta = ({ background, href, text }: CtaArgs) => {
    return /* HTML */ `<div
        class="cta"
        style="background-image: url('${background}');"
    >
        <a class="cta__text" href="${href}">${text} </br> ▼ </a>
    </div>`;
};

export default Cta;
