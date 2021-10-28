import { renderHTML } from "./utils";
import { writeFileSync } from "fs";
import TopBar, { TopBarArgs } from "./components/topbar";
import { LoremIpsum } from "lorem-ipsum";
import Footer, { FooterArgs } from "./components/footer";

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
const footerData: FooterArgs = {
    name: "Filip Izydorczyk",
    email: "filip.izydorczyk@protonmail.com",
    description: lorem.generateSentences(6),
    photo: "/assets/photos/profile.jpg",
    socials: [],
};

writeFileSync(
    "./build/index.html",
    renderHTML("Hello World", "pl", [TopBar(tobBarData), Footer(footerData)])
);
