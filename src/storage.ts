import { Social } from "html-elemnets";
import { LoremIpsum } from "lorem-ipsum";

export const email: string = "filip.izydorczyk@protonmail.com";
export const name: string = "Filip Izydorczyk";

export const socials: Array<Social> = [
    {
        name: "GitHub",
        href: "https://github.com/filipizydorczyk/",
        icon: "/assets/icons/github.svg",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/filip-izydorczyk-39577a216/",
        icon: "/assets/icons/linked_in.svg",
    },
];

export const loremIpsum = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});
