import { renderHTML } from "./utils";
import { writeFileSync } from "fs";
import TopBar, { TopBarArgs } from "./components/topbar";
import { LoremIpsum } from "lorem-ipsum";
import Footer from "./components/footer";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

const tobBarData: TopBarArgs = {
    title: "Test",
    description: lorem.generateSentences(3),
    buttons: [
        { text: "Button", href: "#" },
        { text: "Button", href: "#" },
    ],
};

writeFileSync(
    "./build/index.html",
    renderHTML("Hello World", "pl", [TopBar(tobBarData), Footer({})])
);
