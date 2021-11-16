import { renderHTML } from "./utils";
import { writeFileSync } from "fs";
import { loremIpsum, name, email, socials, icons, stack } from "./storage";
import TopBar, { TopBarArgs } from "./components/topbar";
import Footer, { FooterArgs } from "./components/footer";
import Cta, { CtaArgs } from "./components/cta";
import SteppedList, { SteppedListArgs } from "./components/stepped-list";
import StackSlider, { StackSliderArgs } from "./components/stack-slider";
import ContactMessage, {
    ContactMessageArgs,
} from "./components/contact-message";
import CardList, { CardListArgs } from "./components/card-list";

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
            caption: loremIpsum.generateWords(2),
            icon: icons.capgemini,
        },
        {
            title: loremIpsum.generateWords(1),
            content: loremIpsum.generateSentences(4),
            caption: loremIpsum.generateWords(2),
            icon: icons.sealcode,
        },
        {
            title: loremIpsum.generateWords(1),
            content: loremIpsum.generateSentences(4),
            caption: loremIpsum.generateWords(2),
            icon: icons.hobbajt,
        },
        {
            title: loremIpsum.generateWords(1),
            content: loremIpsum.generateSentences(4),
            caption: loremIpsum.generateWords(2),
            icon: icons.capgemini,
        },
    ],
};

const sliderData: StackSliderArgs = {
    title: loremIpsum.generateWords(3),
    description: loremIpsum.generateSentences(4),
    items: stack,
    colorVariant: "white-color",
};

const contactData: ContactMessageArgs = {
    title: loremIpsum.generateWords(3),
    message: loremIpsum.generateSentences(4),
};

const cardListData: CardListArgs = {
    elements: [
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.capgemini,
            photo: "/assets/photos/code.jpg",
            href: "#",
        },
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.capgemini,
            photo: "/assets/photos/code.jpg",
            href: "#",
        },
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.capgemini,
            photo: "/assets/photos/code.jpg",
            href: "#",
        },
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.sealcode,
            photo: "/assets/photos/code.jpg",
            href: "#",
        },
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.sealcode,
            photo: "/assets/photos/code.jpg",
            href: "#",
            type: "product",
        },
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.capgemini,
            photo: "/assets/photos/code.jpg",
            href: "#",
        },
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.capgemini,
            photo: "/assets/photos/code.jpg",
            href: "#",
        },
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.capgemini,
            photo: "/assets/photos/code.jpg",
            href: "#",
        },
        {
            title: loremIpsum.generateWords(1),
            description: loremIpsum.generateSentences(5),
            icon: icons.sealcode,
            photo: "/assets/photos/code.jpg",
            href: "#",
        },
    ],
};

writeFileSync(
    "./build/index.html",
    renderHTML("Hello World", "pl", [
        TopBar({ ...tobBarData, extraComponent: StackSlider(sliderData) }),
        SteppedList(steppedListData),
        CardList(cardListData),
        ContactMessage(contactData),
        Cta(ctaData),
        Footer(footerData),
    ])
);
