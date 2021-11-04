import { Social } from "html-elemnets";
import { LoremIpsum } from "lorem-ipsum";

export const email: string = "filip.izydorczyk@protonmail.com";
export const name: string = "Filip Izydorczyk";

export const icons = {
    github: "/assets/icons/github.svg",
    linkedin: "/assets/icons/linked_in.svg",
    capgemini: "/assets/icons/capgemini.svg",
    hobbajt: "/assets/icons/hobbajt.png",
    sealcode: "/assets/icons/sealcode.svg",
};

export const socials: Array<Social> = [
    {
        name: "GitHub",
        href: "https://github.com/filipizydorczyk/",
        icon: icons.github,
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/filip-izydorczyk-39577a216/",
        icon: icons.linkedin,
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
