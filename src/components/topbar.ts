import { HTMLButtonData } from "html-elemnets";

export type TopBarPaddingType = "full-size" | "half-size";

export type TopBarArgs = {
    title: string;
    description: string;
    buttons: HTMLButtonData[];
    sizeVariant?: TopBarPaddingType;
};

const TopBar = ({
    title,
    description,
    buttons,
    sizeVariant = "full-size",
}: TopBarArgs) => {
    return /* HTML */ `<div class="topbar topbar--${sizeVariant}">
        <h1 class="topbar__header">${title}</h1>
        <h2 class="topbar__description">${description}</h2>
        <div class="topbar__buttons">
            ${buttons
                .map((button) => {
                    return /* HTML */ `<a
                        class="topbar__button"
                        href="${button.href}"
                        >${button.text}</a
                    >`;
                })
                .join("\n")}
        </div>
    </div>`;
};

export default TopBar;
