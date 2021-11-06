import { HTMLButtonData, HTMLComponent } from "html-elemnets";

export type TopBarArgs = {
    title: string;
    description: string;
    buttons: HTMLButtonData[];
    extraComponent?: HTMLComponent;
};

const TopBar = ({
    title,
    description,
    buttons,
    extraComponent,
}: TopBarArgs) => {
    return /* HTML */ `<div class="topbar">
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
        ${extraComponent
            ? /* HTML */ `<div class="topbar__separator"></div>
                  <div class="topbar__extra-component-wrapper">
                      ${extraComponent}
                  </div>`
            : ``}
    </div>`;
};

export default TopBar;
