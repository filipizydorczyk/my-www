import { renderHTML } from "./utils";
import { writeFileSync } from "fs";

writeFileSync(
    "./build/index.html",
    renderHTML("Hello World", "pl", [`<h1> Hello World</h1>`])
);
