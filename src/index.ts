import { renderHTML } from "./utils";
import { writeFileSync } from "fs";
import { loremIpsum, name, email, socials } from "./storage";
import TopBar, { TopBarArgs } from "./components/topbar";
import Footer, { FooterArgs } from "./components/footer";
import Cta, { CtaArgs } from "./components/cta";

const tobBarData: TopBarArgs = {
    title: "Test",
    description: loremIpsum.generateSentences(3),
    buttons: [
        { text: "Button", href: "#" },
        { text: "Button", href: "#" },
    ],
};
const footerData: FooterArgs = {
    name,
    email,
    description: loremIpsum.generateSentences(6),
    photo: "/assets/photos/profile.jpg",
    socials,
};

const ctaData: CtaArgs = {
    background: "/assets/photos/code.jpg",
    href: "#",
    text: loremIpsum.generateWords(3),
};

writeFileSync(
    "./build/index.html",
    renderHTML("Hello World", "pl", [
        TopBar(tobBarData),
        Cta(ctaData),
        Footer(footerData),
    ])
);
