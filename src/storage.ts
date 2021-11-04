import { Social, Technology } from "html-elemnets";
import { LoremIpsum } from "lorem-ipsum";

export const email: string = "filip.izydorczyk@protonmail.com";
export const name: string = "Filip Izydorczyk";

export const icons = {
    github: "/assets/icons/github.svg",
    linkedin: "/assets/icons/linked_in.svg",
    capgemini: "/assets/icons/capgemini.svg",
    hobbajt: "/assets/icons/hobbajt.png",
    sealcode: "/assets/icons/sealcode.svg",
    css: "/assets/icons/css3.svg",
    docker: "/assets/icons/docker.svg",
    git: "/assets/icons/git.svg",
    html: "/assets/icons/html.svg",
    java: "/assets/icons/java.svg",
    js: "/assets/icons/js.svg",
    python: "/assets/icons/python.svg",
    react: "/assets/icons/react.svg",
    sass: "/assets/icons/sass.svg",
    typescript: "/assets/icons/typescript.svg",
    wordpress: "/assets/icons/wordpress.svg",
};

export const stack: Array<Technology> = [
    {
        name: "css",
        icon: icons.css,
    },
    {
        name: "Docker",
        icon: icons.docker,
    },
    {
        name: "git",
        icon: icons.git,
    },
    {
        name: "HTML",
        icon: icons.html,
    },
    {
        name: "Java",
        icon: icons.java,
    },
    {
        name: "Javascript",
        icon: icons.js,
    },
    {
        name: "Python",
        icon: icons.python,
    },
    {
        name: "React",
        icon: icons.react,
    },
    {
        name: "Sass",
        icon: icons.sass,
    },
    {
        name: "Typescript",
        icon: icons.typescript,
    },
    {
        name: "Wordpress",
        icon: icons.wordpress,
    },
];

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
