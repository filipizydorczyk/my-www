import { Social } from "html-elemnets";
import { LoremIpsum } from "lorem-ipsum";

export const email: string = "filip.izydorczyk@protonmail.com";
export const name: string = "Filip Izydorczyk";

export const socials: Array<Social> = [];

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
