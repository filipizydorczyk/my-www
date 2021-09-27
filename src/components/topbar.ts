import { HTMLButtonData } from "html-elemnets";

export type TopBarPaddingType = "full-size" | "half-size";

export type TopBarArgs = {
    title: string;
    description: string;
    buttons: HTMLButtonData[];
};

const TopBar = (args: TopBarArgs) => {
    return /* HTML */ `<div class="topbar">
        <h1 class="topbar__header">${args.title}</h1>
        <h2 class="topbar__description">${args.description}</h2>
        <a class="topbar__button" href="${args.buttons[0].href}"
            >${args.buttons[0].text}</a
        >
    </div>`;
};

export default TopBar;
