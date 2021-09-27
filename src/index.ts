import { renderHTML } from "./utils";
import { writeFileSync } from "fs";
import TopBar, { TopBarArgs } from "./components/topbar";

const tobBarData: TopBarArgs = {
    title: "Test",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut magna quis est tempus pharetra. Nunc a odio aliquet, pharetra turpis ac, faucibus quam. Nullam porta nibh sed consectetur euismod.`,
    buttons: [{ text: "Button", href: "#" }],
};

writeFileSync(
    "./build/index.html",
    renderHTML("Hello World", "pl", [TopBar(tobBarData)])
);
