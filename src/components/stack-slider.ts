import { Technology } from "html-elemnets";

export type StackSliderColorVariant = "white-color" | "black-color";

export type StackSliderArgs = {
    title: string;
    description: string;
    items: Array<Technology>;
    colorVariant?: StackSliderColorVariant;
};

const StackSlider = ({
    title,
    description,
    items,
    colorVariant = "black-color",
}: StackSliderArgs) => {
    return /* HTML */ `<div class="stack-slider stack-slider__${colorVariant}">
        <h1>${title}</h1>
        <p>${description}</p>
        <div class="stack-slider__carousel" id="stack-carousel">
            ${items
                .map((item) => {
                    return /* HTML */ `<div class="stack-slider__item">
                        <img src="${item.icon}" />
                    </div>`;
                })
                .join("\n")}
        </div>
        <script>
            const mySiema = new Siema({
                selector: "#stack-carousel",
                perPage: {
                    0: 1,
                    600: 2,
                    900: 4,
                    1100: 5,
                    1300: 6,
                    1500: 7,
                },
                loop: true,
            });
        </script>
    </div>`;
};

export default StackSlider;
