import { HTMLUrl } from "html-elemnets";

export type ElementType = "product" | "source-code";

export type CardListElement = {
    title: string;
    description: string;
    icon: HTMLUrl;
    photo: HTMLUrl;
    href: HTMLUrl;
    type?: ElementType;
};

export type CardListArgs = {
    elements: Array<CardListElement>;
};

const CardList = ({ elements }: CardListArgs) => {
    return /* HTML */ `<div class="card-list">
        ${elements
            .map((element) => {
                const type: ElementType = element.type
                    ? element.type
                    : "source-code";
                return /* HTML */ `<div class="card-list__element">
                    <div class="card-list__imgs">
                        <img class="card-list__photo" src="${element.photo}" />
                        <img class="card-list__icon" src="${element.icon}" />
                    </div>
                    <div class="card-list__texts">
                        <h3>${element.title}</h3>
                        <p>${element.description}</p>
                        <a href="${element.href}"
                            >${type == "source-code"
                                ? `Zobacz kod`
                                : `Zobacz produkt`}</a
                        >
                    </div>
                </div>`;
            })
            .join("\n")}
    </div>`;
};

export default CardList;
