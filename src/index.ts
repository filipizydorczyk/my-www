import { renderHTML } from "./utils";
import { writeFileSync } from "fs";
import { loremIpsum, name, email, socials, icons, stack } from "./storage";
import TopBar, { TopBarArgs } from "./components/topbar";
import Footer, { FooterArgs } from "./components/footer";
import Cta, { CtaArgs } from "./components/cta";
import SteppedList, { SteppedListArgs } from "./components/stepped-list";
import StackSlider, { StackSliderArgs } from "./components/stack-slider";

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

const steppedListData: SteppedListArgs = {
    header: loremIpsum.generateWords(3),
    elements: [
        {
            title: loremIpsum.generateWords(1),
            content: loremIpsum.generateSentences(4),
            icon: icons.capgemini,
        },
        {
            title: loremIpsum.generateWords(1),
            content: loremIpsum.generateSentences(4),
            icon: icons.sealcode,
        },
        {
            title: loremIpsum.generateWords(1),
            content: loremIpsum.generateSentences(4),
            icon: icons.hobbajt,
        },
        {
            title: loremIpsum.generateWords(1),
            content: loremIpsum.generateSentences(4),
            icon: icons.capgemini,
        },
    ],
};

const SliderData: StackSliderArgs = {
    title: loremIpsum.generateWords(3),
    description: loremIpsum.generateSentences(4),
    items: stack,
};

writeFileSync(
    "./build/index.html",
    renderHTML("Hello World", "pl", [
        TopBar(tobBarData),
        StackSlider(SliderData),
        SteppedList(steppedListData),
        Cta(ctaData),
        Footer(footerData),
    ])
);
