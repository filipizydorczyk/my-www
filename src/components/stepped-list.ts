import { HTMLUrl } from "html-elemnets";
export type SteppedListElement = {
    title: string;
    content: string;
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
                .map((element) => {
                    return /* HTML */ `<div class="stepped-list__element">
                        <h3>${element.title}</h3>
                        <p>${element.content}</p>
                        ${element.icon ? `<img src="${element.icon}" />` : ``}
                    </div>`;
                })
                .join("\n")}
        </div>
    </div>`;
};

export default SteppedList;
