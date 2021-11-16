import { HTMLUrl } from "html-elemnets";
export type SteppedListElement = {
    title: string;
    content: string;
    caption: string;
    icon?: HTMLUrl;
};

export type SteppedListArgs = {
    header: string;
    elements: Array<SteppedListElement>;
};

const SteppedList = ({ header, elements }: SteppedListArgs) => {
    return /* HTML */ `<div class="stepped-list">
        <h1>${header}</h1>
        <div class="stepped-list__container">
            ${elements
                .map((element, index) => {
                    return /* HTML */ `<div class="stepped-list__element">
                        <h3>${element.title}</h3>
                        <p>${element.content}</p>
                        ${element.icon ? `<img src="${element.icon}" />` : ``}
                        <div
                            class="stepped-list__date-border ${index % 2 == 0
                                ? `stepped-list__date-border--even`
                                : `stepped-list__date-border--odd`}"
                        >
                            <h4>${element.caption}</h4>
                        </div>
                    </div>`;
                })
                .join("\n")}
        </div>
    </div>`;
};

export default SteppedList;
